import { createReducer } from '@reduxjs/toolkit';
import * as Actions from './actions.js';
import initialState from '../initialState';

const users = createReducer(initialState.users, {
  [Actions.getUsers.SUCCESS]: (state, action) => {
    state.users = action.payload;
  },
  [Actions.getMoreUsers.SUCCESS]: (state, action) => {
    state.users = action.payload;
  },
  [Actions.selectUser.SUCCESS]: (state, action) => {
    console.log(action)
    state.users = action.payload.users;
    state.selectedUsers = action.payload.selectedUsers;
    state.selectedUsersCount = action.payload.selectedUsersCount;
  },
  [Actions.getUser.SUCCESS]: (state, action) => {
    state.user = action.payload;
  },
});

export { users as reducer };
