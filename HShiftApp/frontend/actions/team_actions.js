export const receiveTeam = team => {
  return {
    type: 'RECEIVE_SINGLE_TEAM',
    team
  }
}

export const receiveTeams = teams => {
  return {
    type: 'RECEIVE_ALL_TEAMS',
    teams
  }
}
