import { put, call, select } from 'redux-saga/effects';
import * as Actions from './actions';
import { getUsersList } from './helpers';
import { usersSelector, selectedUsersSelector } from './selectors';

const getUsersApi = () => {
  return fetch('https://randomuser.me/api/?results=20')
    .then((response) => {
      return response.json();
    })
}

export function* ensureGetUsers() {
  try {
    const { results } = yield call(getUsersApi);
    const data = getUsersList(results);
    yield put(Actions.getUsers.success(data));
  } catch (err) {
    yield put(Actions.getUsers.failure(err));
  }
}

export function* ensureGetUser({ payload } = {}) {
  try {
    const users = yield select(usersSelector);
    const user = users.find(item => item._id === payload);
    yield put(Actions.getUser.success(user));
  } catch (err) {
    yield put(Actions.getUser.failure(err));
  }
}

export function* ensureGetMoreUsers() {
  try {
    const users = yield select(usersSelector);
    const { results } = yield call(getUsersApi, {});
    const data = [ ...users, ...getUsersList(results) ];
    yield put(Actions.getMoreUsers.success(data));
  } catch (err) {
    yield put(Actions.getMoreUsers.failure(err));
  }
}

export function* ensureSelectUser({ payload } = {}) {
  try {
    const users = yield select(usersSelector);
    const selectedUsers = yield select(selectedUsersSelector);
    const selectedUser = users.find(item => item._id === payload);
    const newSelectedUser = {
      ...selectedUser,
      dateOfSelection: new Date(),
      isSelected: true,
    }
    const newUsers = users.map(item => {
      if (item._id === payload) {
        return newSelectedUser
      }
      return item;
    });
    const data = {
      users: newUsers,
      selectedUsers: [ ...selectedUsers, newSelectedUser ],
      selectedUsersCount: selectedUsers.length + 1,
    };
    yield put(Actions.selectUser.success(data));
  } catch (err) {
    yield put(Actions.selectUser.failure(err));
  }
}
