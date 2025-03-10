import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log('store : ',store);
  console.log('action : ',action);
  next(action);
}

const middleware = applyMiddleware(thunk, loggerMiddleware)
const store = createStore(rootReducer,middleware);

// 초기 상태에 TODO 추가
store.dispatch({ 
    type: "ADD_TODO",
    text: "USE REDUX"
});
console.log('store.getState', store.getState());

const render = () => {
    root.render(
        <React.StrictMode>
          <Provider store = {store}>
            <App 
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
            </Provider>
        </React.StrictMode>
    );
};

// Subscribe to store updates
store.subscribe(render);

// Initial render
render();

reportWebVitals();
