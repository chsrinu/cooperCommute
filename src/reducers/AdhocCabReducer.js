import {
        ACTION_TIMER_RESET,
        ACTION_SHOW_TIMER,
        ACTION_PICKUP_TIME,
        ACTION_ADHOC_CAB_REQUEST
      } from '../constants';

function getTime(t) {
  console.log('time in reducer', t);
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
  datesArray: [
    {
      key: 0,
      date: getTodaysDate(),
      boardingTime: getTime(new Date()),
      from: 'DLF IT Park',
      to: 'Pallavaram',
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TIMER_RESET:
          return { ...state, pickUpTime: action.payload };
    case ACTION_SHOW_TIMER:
          return { ...state, isDateTimePickerVisible: action.payload };
    case ACTION_PICKUP_TIME:
        var dArray = state.datesArray;
        dArray[0].boardingTime = getTime(action.payload);
        return { ...state, isDateTimePickerVisible: false, datesArray: dArray };
    case ACTION_ADHOC_CAB_REQUEST:
      console.log('adhoc cab request sent');
      return { ...state };
    default :
      return { ...state };
  }
};
function getTodaysDate() {
  var d = new Date();
  var str = d.toDateString();
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}
