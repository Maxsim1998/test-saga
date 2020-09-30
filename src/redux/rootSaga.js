import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { usersRoot } from './users';

export default function* rootSaga() {
  yield all([
    fork(routinePromiseWatcherSaga),
    fork(usersRoot),
  ]);
}
