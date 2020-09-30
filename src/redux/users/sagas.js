import { fork, all } from 'redux-saga/effects';
import * as W from './watchers';

export function* usersRoot() {
  yield all([
    fork(W.watchGetUsers),
    fork(W.watchSelectUser),
    fork(W.watchGetMoreUsers),
    fork(W.watchGetUser),
  ]);
};
