import merge from 'lodash/merge';

import { RECEIVE_ALL_SHIFTS, RECEIVE_SINGLE_SHIFT } from '../actions/shift_actions';

const defaultShifts = {
  entities: {},
  currentShift: null
}
const shiftsReducer = (state=defaultShifts, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SHIFTS:
      return merge({}, state, {entities: action.shifts})
    case RECEIVE_SINGLE_SHIFT:
      const shift = action.shift;
      let newState = merge({}, state);
      newState.currentShift = shift;
      newState.entities[shift.id] = shift;
      return newState;
    case 'RESET_SHIFT':
      return merge({}, state, {currentShift: null});
    case 'REMOVE_SHIFT':
      const shift2 = action.shift;
      let newState2 = merge({}, state);
      delete newState2.entities[shift2.id];
    default:
      return state;
  }
}

export default shiftsReducer;
