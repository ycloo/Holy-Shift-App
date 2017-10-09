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
