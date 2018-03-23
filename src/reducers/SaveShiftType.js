import { ACTION_IS_SHIFT_CAB } from '../constants';

const INITIAL_STATE = { isShiftCab: '' };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_IS_SHIFT_CAB:
      return { ...state, isShiftCab: action.payload };
    default: return { ...state };
  }
};
