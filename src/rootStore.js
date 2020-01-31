import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer.js';
import ReduxPromise from "redux-promise";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxPromise))
);

export default rootStore;