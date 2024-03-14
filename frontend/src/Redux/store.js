import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './Auth/authReducer.js';

const rootReducer = combineReducers({
     auth: authReducer
});

const middleware = [thunk];

const store = legacy_createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
