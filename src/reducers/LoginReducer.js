import { ACTION_USER_DATA } from '../constants';
const INITIAL_STATE = { user: '' }
export default (state = {INITIAL_STATE}, action) => {
  switch (action.type) {
    case ACTION_USER_DATA :
    return { state };
    default:
    return { state };
  }
};
