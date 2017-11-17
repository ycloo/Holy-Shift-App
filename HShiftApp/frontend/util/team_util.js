import TEAM_URL from '../api';

export const fetchTeams = userId => {
  return fetch(TEAMS_URL, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const fetchTeam = teamId => {
  return fetch(TEAM_URL(teamId), {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const deleteTeam = teamId => {
  return fetch(TEAM_URL(teamId), {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const updateTeam = (teamId, team) => {
  return fetch(TEAM_URL(teamId), {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      team
    })
  })
}
