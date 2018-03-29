//import axios from 'axios';
import {
    ACTION_SCHEDULED_CABS } from '../constants';
//import currentUser from './userProfile.json';
const INITIAL_STATE = {
  dailyData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_SCHEDULED_CABS:
      return { ...state, dailyData: getTodaysDate(action.payload) };
    default: return { state };
  }
};
function getTodaysDate(data) {
  console.log(data);
    var currentTrip = [];
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (date < 10)
      date = '0' + date;
    if (month < 10)
      month = '0' + month;
    var today = `${year}-${month}-${date}`;
    //filter todays date in this format 2018-12-25
    for (var i in data) {
    if (data[i].rqstDt === '2018-12-25') {
      console.log(data[i]);
      currentTrip.push(data[i]);
    }
  }
  //console.log('filtered', currentTrip);
    return currentTrip;
}
