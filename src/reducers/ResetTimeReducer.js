import {
        ACTION_TIMER_RESET,
        ACTION_SHOW_TIMER,
        ACTION_HIDE_TIMER,
        ACTION_PICKUP_TIME
      } from '../constants';

function getTime(t) {
  let hours = t.getHours();
  let h = hours <= 12 ? hours : hours - 12;
  const session = (hours === h && h !== 12) ? 'AM' : 'PM';
  let m = t.getMinutes();
  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  return `${h}:${m} ${session}`;
}
const INITIAL_STATE = {
  isDateTimePickerVisible: false,
  pickUpTime: getTime(new Date())
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ACTION_TIMER_RESET:
          return { ...state, pickUpTime: action.payload };
    case ACTION_SHOW_TIMER:
          return { ...state, isDateTimePickerVisible: action.payload };
    case ACTION_HIDE_TIMER:
          return { ...state, isDateTimePickerVisible: action.payload };
    case ACTION_PICKUP_TIME:
          return {
            ...state,
            pickUpTime: getTime(action.payload) };
    default :
      return { ...state };
  }
};
