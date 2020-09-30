import { fork, takeLatest } from 'redux-saga/effects';
import * as A from './actions';
import * as E from './workers';

export function* watchGetUsers() {
  yield takeLatest(A.getUsers.TRIGGER, E.ensureGetUsers);
};

export function* watchSelectUser() {
  yield takeLatest(A.selectUser.TRIGGER, E.ensureSelectUser);
};

export function* watchGetMoreUsers() {
  yield takeLatest(A.getMoreUsers.TRIGGER, E.ensureGetMoreUsers);
};

export function* watchGetUser() {
  yield takeLatest(A.getUser.TRIGGER, E.ensureGetUser);
};
