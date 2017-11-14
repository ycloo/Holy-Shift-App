import TEAM_URL from '../api';

export const fetchTeam = teamId => {
  return fetch(TEAM_URL(teamId), {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
