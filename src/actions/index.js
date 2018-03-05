import {
        ACTION_TIMER_RESET,
        ACTION_SHOW_TIMER,
        ACTION_HIDE_TIMER,
        ACTION_PICKUP_TIME,
        ACTION_SHIFT_SELECTED
      } from '../constants';

export const ResetTimer = (hours, minutes, session) => (
  {
    type: ACTION_TIMER_RESET,
    payload: `${hours}:${minutes} ${session}`
  }
);

export const showResetTimer = () => (
  {
    type: ACTION_SHOW_TIMER,
    payload: true
  }
);

export const hideResetTimer = () => (
  {
    type: ACTION_HIDE_TIMER,
    payload: false
  }
);

export const setPickUpTime = (time) => (
  {
    type: ACTION_PICKUP_TIME,
    payload: time
  }
);

export const shiftSelected = ({ shift, date }) => {
  console.log(shift);
  return ({
    type: ACTION_SHIFT_SELECTED,
    payload: { date, shift }
  });
};
