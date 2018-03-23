import {
    ACTION_WEEKLY_DATA,
    ACTION_DAILY_DATA } from '../constants';

const INITIAL_STATE = {
  weeklyData: [],
  dailyData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_WEEKLY_DATA:
      return { ...state };
    case ACTION_DAILY_DATA :
      return { ...state };
    default: return { ...state };
  }
};
