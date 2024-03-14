// reducers/authReducer.js

import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from '../Auth/actionType';

const initialState = {
     isAuthenticated: false,
     token: localStorage.getItem('token') || null,
};

const authReducer = (state = initialState, action) => {
     switch (action.type) {
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
               return {
                    ...state,
                    isAuthenticated: true,
                    token: action.payload
               };
          case LOGOUT_SUCCESS:
               localStorage.removeItem('token');
               return {
                    ...state,
                    token: null
               };
          default:
               return state;
     }
};

export default authReducer;
