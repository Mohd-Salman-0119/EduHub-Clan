// actions/courseActions.js

export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';


export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses
});

export const addCourse = (course) => ({
  type: ADD_COURSE,
  payload: course
});

export const updateCourse = (course) => ({
  type: UPDATE_COURSE,
  payload: course
});

export const deleteCourse = (courseId) => ({
  type: DELETE_COURSE,
  payload: courseId
});
