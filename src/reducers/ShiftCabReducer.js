import axios from 'axios';
import {
   ACTION_SHIFT_SELECTED,
   ACTION_SHIFT_UNSELECTED,
   ACTION_CURRENT_WEEK_DATES,
   ACTION_SHIFT_CAB_REQUEST } from '../constants';
import data from './cabRequestFormat.json';


/*
confirmationData = [
  {
    key: 1,
    from: 'DLF IT PARK',
    to: 'Pallavaram',
    date: '13/15/2018',
    boardingTime: '12:45 PM'
  },
];
*/
const INITIAL_STATE = { datesArray: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_SHIFT_SELECTED:
      var dArray = checkExistance(state.datesArray, action, 'add');
      console.log(dArray);
      return { ...state, datesArray: dArray };
    case ACTION_CURRENT_WEEK_DATES:
      return { ...state };
    case ACTION_SHIFT_UNSELECTED:
      dArray = checkExistance(state.datesArray, action, 'delete');
      return { ...state, datesArray: dArray };
    case ACTION_SHIFT_CAB_REQUEST:
      console.log(data);
      dArray = state.datesArray;
      for (var i in dArray) {
        var timeAr = dArray[i].boardingTime.split('-');
        data.rqstType = 'round';
        data.rqstDate = dArray[i].date;
        data.rqstInTm = timeAr[0];
        data.rqstOutTm = timeAr[1];
        axios.post('http://10.79.8.251:8080/submitCabRequest', data).then(console.log('success'));
  }

      console.log('shift cab req sent');
      return { ...state };
      default :
      return { ...state };
    }
  };
function checkExistance(dArray, action, arrayOperation) {
  var found = false;
  var position = 0;
  for (var i in dArray) {
    if (dArray[i].date === action.payload.dateKey) {
      found = true;
      position = i;
      break;
    }
  }
  if (!found && arrayOperation === 'add') {
    var temp = {
      key: dArray.length,
      date: action.payload.dateKey,
      boardingTime: getExactTime(action.payload.timeKey),
      from: 'DLF IT Park',
      to: 'Pallavaram',
      cabType: action.payload.cabType
    };
    dArray.push(temp);
  } else if (found && arrayOperation === 'add') {
    dArray[position].boardingTime = getExactTime(action.payload.timeKey);
    } else if (arrayOperation === 'delete') {
      dArray.splice(position, 1);
    }
    return dArray;
  }
  function getExactTime(shift) {
    switch (shift) {
      case 's1': return '06:00-15:00';
      case 's2': return '14:00-23:00';
      case 's3': return '22:00-07:00';
      default :
    }
  }
