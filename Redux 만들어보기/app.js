import { createStore, actionCreator } from "./redux";
import { reducer } from "./reducer";
import { decrease, increase } from './actions'

const store = createStore(reducer);

store.subscribe(function() {
    store.getState();
});

store.dispatch(increase())
store.dispatch(decrease())