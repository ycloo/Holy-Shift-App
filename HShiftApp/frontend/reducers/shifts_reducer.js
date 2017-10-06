import merge from 'lodash/merge';

const shiftsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case 'RECEIVE_SHIFTS':
      return merge({}, action.shifts);
    case 'RESET_SHIFTS':
      return {};
    default:
      return state;
  }
}

export default shiftsReducer;
