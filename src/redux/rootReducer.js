import { combineReducers } from '@reduxjs/toolkit';
import initialState from './initialState';

function reducer(state, action) {
  return rootReducer(combineReducer(state, action), action);
}

const combineReducer = combineReducers({
  users: require('./users').reducer,
});

const rootReducer = (state) => state;

export default reducer;
