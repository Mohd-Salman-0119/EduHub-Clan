// actions/authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const loginSuccess = (token) => ({
     type: LOGIN_SUCCESS,
     payload: token
});

export const registerSuccess = (token) => ({
     
     type: REGISTER_SUCCESS,
     payload: token
});
