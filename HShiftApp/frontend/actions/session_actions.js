// import * as APIUtil from '../util/session_api_util';
// import axios from 'axios';
// import {USERS_URL} from '../api';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: RESET_ERRORS
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const login = async user => dispatch => {
  try {
    const user = JSON.parse(await APIUtil.login(user));
    dispatch(receiveCurrentUser(user));
  } catch (err) {
    dispatch(receiveErrors(errors.responseJSON)
  }
}
// export const login = user => dispatch => {
//   return axios.post('http://localhost:3000/v1/signin', user)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err,'err');
//   });
// };

export const signup = user => dispatch => {
  return axios.post('http://localhost:3000/v1/signup', user)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err, 'err');
  });
};

// export const signup = user => dispatch => {
//   return APIUtil.signup(user).then(
//   user => dispatch(receiveCurrentUser(user)),
//   error => dispatch(receiveErrors(error.responseJSON))
// )
// };
//
