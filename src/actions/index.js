import {
        ACTION_TIMER_RESET,
        ACTION_SHOW_TIMER,
        ACTION_PICKUP_TIME,
        ACTION_SHIFT_SELECTED,
        ACTION_CURRENT_WEEK_DATES,
        ACTION_SHIFT_UNSELECTED,
        ACTION_IS_SHIFT_CAB,
      } from '../constants';

export const ResetTimer = (hours, minutes, session) => (
  {
    type: ACTION_TIMER_RESET,
    payload: `${hours}:${minutes} ${session}`
  }
);
export const updateCabCategory = (update) => (
  {
    type: ACTION_IS_SHIFT_CAB,
    payload: update
  }
);
export const showResetTimer = () => (
  {
    type: ACTION_SHOW_TIMER,
    payload: true
  }
);

export const setPickUpTime = (time) => (
  {
    type: ACTION_PICKUP_TIME,
    payload: time
  }
);

export const shiftSelected = ({ shift, shiftDate }) => {
  console.log(shift, shiftDate);
  return ({
    type: ACTION_SHIFT_SELECTED,
    payload: { dateKey: shiftDate, timeKey: shift, cabType: 'shift' }
  });
};

export const shiftUnselected = ({ shiftDate }) => {
  console.log('cancelled shift', shiftDate);
  return ({
    type: ACTION_SHIFT_UNSELECTED,
    payload: { dateKey: shiftDate }
  });
};
export const saveDates = () => (
  {
      type: ACTION_CURRENT_WEEK_DATES,
      payload: true
  }
);
export const submitCabRequest = (action) => (
  {
      type: action,
  }
);
