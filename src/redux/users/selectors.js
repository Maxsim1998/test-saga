import { createSelector } from '@reduxjs/toolkit';

const users = r => r.users;
export const usersSelector = createSelector(users, r => r.users);
export const userSelector = createSelector(users, r => r.user);
export const selectedUsersSelector = createSelector(users, r => r.selectedUsers);
export const selectedUsersCountSelector = createSelector(users, r => r.selectedUsersCount);
