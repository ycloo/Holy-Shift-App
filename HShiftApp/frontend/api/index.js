const API_URL = 'http://localhost:3000/';
export const SIGNIN_URL = `${API_URL}/login`;
export const SIGNUP_URL = `${API_URL}/signup`;
export const USERS_URL = (user_id) => `${API_URL}/users/${user_id}`;
export const TEAM_URL = (team_id) => `${API_URL}/teams/${team_id}`;
export const TEAMS_URL = `${API_URL}/teams/`;
