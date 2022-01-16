import { takeLatest, all, take } from 'redux-saga/effects';

import {
  FETCH_TASK,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from '../actionTypes';
import { fetchTaskSaga } from './FetchtaskSaga';

import { signinSaga } from './SigninSaga';

function* actionWatcher() {
  yield takeLatest(SIGN_IN, signinSaga);
  yield takeLatest(FETCH_TASK, fetchTaskSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}