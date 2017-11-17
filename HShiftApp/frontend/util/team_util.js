import TEAM_URL from '../api';
import TEAMS_URL from '../api';

export const fetchTeams = userId => {
  return fetch(TEAMS_URL, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId
    })
  })
}

export const createTeam = (userId, team) => {
  return fetch(TEAMS_URL, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      team
    })
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
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      team
    })
  })
}
