const API_URL = 'http://localhost:3000/';
export const SIGNIN_URL = `${API_URL}/login`;
export const SIGNUP_URL = `${API_URL}/signup`;
export const USERS_URL = (userId) => `${API_URL}/users/${userId}`;
export const TEAM_URL = (teamId) => `${API_URL}/teams/${teamId}`;
export const TEAMS_URL = `${API_URL}/teams/`;
export const SHIFTS_URL = `${API_URL}/shifts/`;
export const SHIFT_URL = shiftId => `${API_URL}/shifts/${shiftId}`
