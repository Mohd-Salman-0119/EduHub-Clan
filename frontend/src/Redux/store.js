import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './Auth/authReducer.js';
import courseReducer from './courses/courseReducer.js';
import lectureReducer from './lectures/lectureReducer.js';
import userReducer from './users/userReducer.js';

const rootReducer = combineReducers({
     auth: authReducer,
     courses: courseReducer,
     lectures: lectureReducer,
     users: userReducer
});

const middleware = [thunk];

const store = legacy_createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
