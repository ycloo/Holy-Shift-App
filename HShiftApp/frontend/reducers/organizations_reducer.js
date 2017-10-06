// import merge from 'lodash/merge';

const organizationsReducer = (state='', action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_USER':
      return action.organization;
    default:
      return state;
  }
}

export default organizationsReducer;
