import { takeLatest, all, take } from 'redux-saga/effects';

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from '../actionTypes';

import { signinSaga } from './SigninSaga';

function* actionWatcher() {
  yield takeLatest(SIGN_IN, signinSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}