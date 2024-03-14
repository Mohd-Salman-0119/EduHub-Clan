// reducers/authReducer.js

import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../Auth/actionType';

const initialState = {
     isAuthenticated: false,
     token: null
};

const authReducer = (state = initialState, action) => {
     console.log(action.payload)
     switch (action.type) {
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
               return {
                    ...state,
                    isAuthenticated: true,
                    token: action.payload
               };
          default:
               return state;
     }
};

export default authReducer;
