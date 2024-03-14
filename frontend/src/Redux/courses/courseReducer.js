// reducers/courseReducer.js

import {
     FETCH_COURSES_SUCCESS,
     ADD_COURSE,
     UPDATE_COURSE,
     DELETE_COURSE
} from './actionType';

const initialState = {
     courses: [],
     loading: false,
     error: null
};

const courseReducer = (state = initialState, action) => {
     switch (action.type) {
          case FETCH_COURSES_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    courses: action.payload,
                    error: null
               };
          case ADD_COURSE:
               return {
                    ...state,
                    courses: [...state.courses, action.payload]
               };
          case UPDATE_COURSE:
               return {
                    ...state,
                    courses: state.courses.map(course =>
                         course.id === action.payload.id ? action.payload : course
                    )
               };
          case DELETE_COURSE:
               return {
                    ...state,
                    courses: state.courses.filter(course => course.id !== action.payload)
               };
          default:
               return state;
     }
};

export default courseReducer;
