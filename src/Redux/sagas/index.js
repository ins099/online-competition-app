import { takeLatest, all, take } from 'redux-saga/effects';

import {
  FETCH_TASK,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SUBMIT_ENTRY,
} from '../actionTypes';
import { fetchTaskSaga } from './FetchtaskSaga';

import { signinSaga } from './SigninSaga';
import { submitEntrySaga } from './SubmitEntrySaga';

function* actionWatcher() {
  yield takeLatest(SIGN_IN, signinSaga);
  yield takeLatest(FETCH_TASK, fetchTaskSaga);
  yield takeLatest(SUBMIT_ENTRY, submitEntrySaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}