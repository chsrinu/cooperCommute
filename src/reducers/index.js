import { combineReducers } from 'redux';
import AdhocCabReducer from './AdhocCabReducer';
import ShiftCabReducer from './ShiftCabReducer';
import SaveShiftType from './SaveShiftType';
export default combineReducers({
    adhocCabData: AdhocCabReducer,
    shiftCabData: ShiftCabReducer,
    cabCategory: SaveShiftType,
});
