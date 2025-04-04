import { createStore } from './redux.js';
import * as Actions from './actions.js';
import reducer from './reducer.js';
import { ASYNC_INCREASE_COUNTER } from './action-type.js';

const asyncRouter = jobs => store => next => action => {
  const matchJob = Object.entries(jobs).find(([type]) => action.type === type);
  if(matchJob){
    matchJob[1](store,action);
  }else {
    next(action);
  }
  asyncIncrease()
}

const asyncJobs = {
  [ASYNC_INCREASE_COUNTER] :  function (store,action){
    setTimeout(() => {
      store.dispatch(Actions.increase(20))
    }, 3000)
  }
}
const middleware = store => dispatch => action => {
  dispatch(action)
}
const store = createStore(reducer, [logger, asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector('#counter');
const btnIncrease = document.querySelector('#btn-increase');
const btnAsyncIncrease = document.querySelector('#btn-async-increase');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');

store.subscribe(function() {
  const { counter } = store.getState();

  counterDisplay.textContent = counter;
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener('click', () => {
  store.dispatch(Actions.setCounter(0));
});

btnIncrease.addEventListener('click', () => {
  store.dispatch(Actions.increase());
});

btnAsyncIncrease.addEventListener('click', () => {
  store.dispatch(Actions.asyncIncrease({ url: '/async-increase' }));
});

btnDecrease.addEventListener('click', () => {
  store.dispatch(Actions.decrease());
});
