import { ACTION_SHIFT_SELECTED } from '../constants';

const INITIAL_STATE = {
  s1Color: '#54C0EB',
  s2Color: '#54C0EB',
  s3Color: '#54C0EB',
  date: ''
};
export default (state = INITIAL_STATE, action) => {
  console.log(action.type.shift);
  switch (action.type) {

    case ACTION_SHIFT_SELECTED:
        if (action.payload.shift === 1) {
        return { ...state, s1Color: 'green', s2Color: '#54C0EB', s3Color: '#54C0EB' };
        } else if (action.payload.shift === 2) {
        return { ...state, s1Color: '#54C0EB', s2Color: 'green', s3Color: '#54C0EB' };
      } 
      return { ...state, s1Color: '#54C0EB', s2Color: '#54C0EB', s3Color: 'green' };
    default:
      return { ...state };
      }
  };
