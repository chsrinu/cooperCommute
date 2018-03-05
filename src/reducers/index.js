import { combineReducers } from 'redux';
import ResetTimeReducer from './ResetTimeReducer';
import selectShiftReducer from './selectShiftReducer';

export default combineReducers({
    resetTimer: ResetTimeReducer,
    shiftSelector: selectShiftReducer
});
