import { createRoutine, promisifyRoutine } from 'redux-saga-routines';

export const getUsers = createRoutine('users/getUsers');
export const getUsersPromiseCreator = promisifyRoutine(getUsers);

export const getMoreUsers = createRoutine('users/getMoreUsers');
export const getMoreUsersPromiseCreator = promisifyRoutine(getMoreUsers);

export const getUser = createRoutine('users/getUser');
export const getUserPromiseCreator = promisifyRoutine(getUser);

export const selectUser = createRoutine('users/selectUser');
export const selectUserPromiseCreator = promisifyRoutine(selectUser);