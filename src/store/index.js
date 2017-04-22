//import logger from "redux-logger";
import {createStore, applyMiddleware, combineReducers} from "redux";
import MyReducer from './reducers/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
     MyReducer
});

const middleware = applyMiddleware(thunk);

let store = createStore(rootReducer,middleware);

// store.subscribe(() =>
//   console.log(store.getState())
// );

export default store;