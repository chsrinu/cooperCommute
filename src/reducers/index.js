import { combineReducers } from 'redux';
import ResetTimeReducer from './ResetTimeReducer';


export default combineReducers({
    resetTimer: ResetTimeReducer,
});
