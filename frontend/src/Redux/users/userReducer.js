// reducers/userReducer.js

import {
     FETCH_USERS_SUCCESS,
     UPDATE_USER,
     DELETE_USER
} from './actionType';

const initialState = {
     users: [],
     loading: false,
     error: null
};

const userReducer = (state = initialState, action) => {
     switch (action.type) {

          case FETCH_USERS_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    users: action.payload,
                    error: null
               };

          case UPDATE_USER:
               return {
                    ...state,
                    users: state.users.map(user =>
                         user.id === action.payload.id ? action.payload : user
                    )
               };
          case DELETE_USER:
               return {
                    ...state,
                    users: state.users.filter(user => user.id !== action.payload)
               };
          default:
               return state;
     }
};

export default userReducer;
