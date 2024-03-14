// actions/userActions.js

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
});
