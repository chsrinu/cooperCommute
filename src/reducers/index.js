import { combineReducers } from 'redux';
import AdhocCabReducer from './AdhocCabReducer';
import ShiftCabReducer from './ShiftCabReducer';
import SaveShiftType from './SaveShiftType';
import ManageTripReducer from './ManageTripReducer';

export default combineReducers({
    adhocCabData: AdhocCabReducer,
    shiftCabData: ShiftCabReducer,
    cabCategory: SaveShiftType,
    manageTripData: ManageTripReducer
});
