// reducers/lectureReducer.js

import {
     FETCH_LECTURES_SUCCESS,
     ADD_LECTURE,
     UPDATE_LECTURE,
     DELETE_LECTURE
} from './actionType';

const initialState = {
     lectures: [],
     loading: false,
     error: null
};

const lectureReducer = (state = initialState, action) => {
     switch (action.type) {

          case FETCH_LECTURES_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    lectures: action.payload,
                    error: null
               };
          case ADD_LECTURE:
               return {
                    ...state,
                    lectures: [...state.lectures, action.payload]
               };
          case UPDATE_LECTURE:
               return {
                    ...state,
                    lectures: state.lectures.map(lecture =>
                         lecture.id === action.payload.id ? action.payload : lecture
                    )
               };
          case DELETE_LECTURE:
               return {
                    ...state,
                    lectures: state.lectures.filter(lecture => lecture.id !== action.payload)
               };
          default:
               return state;
     }
};

export default lectureReducer;
