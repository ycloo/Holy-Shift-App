import merge from 'lodash/merge';

const defaultTeam = {
  entities: {},
  currentTeam: null
}
const teamsReducer = (state=defaultTeam, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_ALL_TEAMS':
      return merge({}, state, {entities: action.teams})
    case 'RECEIVE_SINGLE_TEAM':
      const team = action.team;
      let newState = merge({}, state);
      newState.currentTeam = team;
      newState.entities[team.id] = team;
      return newState;
    case 'RESET_TEAM':
      return merge({}, state, {currentTeam: null});
    case 'REMOVE_TEAM':
      const team2 = action.team;
      let newState2 = merge({}, state);
      delete newState2.entities[team2.id];
    default:
      return state;
  }
}

export default teamsReducer;
