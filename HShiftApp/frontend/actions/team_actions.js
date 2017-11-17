import * as APIUtil from '../util/team_util';

export const RECEIVE_SINGLE_TEAM = 'RECEIVE_SINGLE_TEAM';
export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';

export const receiveTeam = team => {
  return {
    type: RECEIVE_SINGLE_TEAM,
    team
  }
}

export const receiveTeams = teams => {
  return {
    type: RECEIVE_ALL_TEAMS,
    teams
  }
}

export const requestTeam = team => dispatch => {
  return APIUtil.fetchTeam(team).then(
    team => dispatch(receiveTeam(team))
  )
}

// export const fetchTeams = userId => dispatch => {
//   const team = JSON.parse(await APIUtil.fetchTeam(userId));
//   console.log(team);
// }
