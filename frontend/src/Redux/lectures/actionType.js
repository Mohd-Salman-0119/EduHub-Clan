// actions/lectureActions.js

export const FETCH_LECTURES_SUCCESS = 'FETCH_LECTURES_SUCCESS';
export const ADD_LECTURE = 'ADD_LECTURE';
export const UPDATE_LECTURE = 'UPDATE_LECTURE';
export const DELETE_LECTURE = 'DELETE_LECTURE';

export const fetchLecturesSuccess = (lectures) => ({
  type: FETCH_LECTURES_SUCCESS,
  payload: lectures
});

export const addLecture = (lecture) => ({
  type: ADD_LECTURE,
  payload: lecture
});

export const updateLecture = (lecture) => ({
  type: UPDATE_LECTURE,
  payload: lecture
});

export const deleteLecture = (lectureId) => ({
  type: DELETE_LECTURE,
  payload: lectureId
});
