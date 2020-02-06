import { combineReducers } from 'redux';

import fetchDataReducer from './reducers/fetchDataReducer.js';
import fetchDataByIdReducer from './reducers/fetchDataByIdReducer.js';

const rootReducer = combineReducers({
    fetchDataReducer,
    fetchDataByIdReducer
});

export default rootReducer;