import { combineReducers } from 'redux';

import fetchDataReducer from './reducers/reducers.js';

const rootReducer = combineReducers({
    fetchDataReducer
});

export default rootReducer;