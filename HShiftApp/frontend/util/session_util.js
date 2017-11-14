import SIGNIN_URL from '../api';

export const login = user => {
  return fetch(SIGNIN_URL, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user
    })
  })
};
