import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer.js';
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const rootStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxPromise))
);

export default rootStore;