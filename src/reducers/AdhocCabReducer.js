import {
        ACTION_TIMER_RESET,
        ACTION_SHOW_TIMER,
        ACTION_PICKUP_TIME,
        ACTION_ADHOC_CAB_REQUEST
      } from '../constants';

function getTime(t) {
  console.log('time in reducer', t);
  let h = t.getHours();
  let m = t.getMinutes();
  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  return `${h}:${m}`;
}
const INITIAL_STATE = {
  isDateTimePickerVisible: false,
  datesArray: [
    {
      key: 0,
      rqstDt: changeDateFormat(new Date()),
      rqstInTm: getTime(new Date()),
      rqstFrmAddr: 'DLF IT Park',
      rqstToAddr: 'Pallavaram',
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
        dArray[0].rqstInTm = getTime(action.payload);
        return { ...state, isDateTimePickerVisible: false, datesArray: dArray };
    case ACTION_ADHOC_CAB_REQUEST:
      console.log('adhoc cab request sent');
      return { ...state };
    default :
      return { ...state };
  }
};

function changeDateFormat(d) {
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
      date = '0' + date;
  }
  return `${year}-${month}-${date}`;
}
