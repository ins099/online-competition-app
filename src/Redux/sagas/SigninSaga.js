
import { put, call, all, select } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constant/network';
import { push } from 'react-router-redux'

import { RestClient } from '../../network/RestClient';
import {
    FETCH_TASK,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from '../actionTypes';
import { ActionWithoutPayload } from '../actions';

export function* signinSaga({ payload }) {
  try {
    const {
      username = '',
      password = '',
    } = payload;
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.signin, {
        username: username.toLowerCase(),
        password,
      })
    );
    if (response.problem === 'NETWORK_ERROR') {
    //   Alert.alert('Network Error');
    }
    const {
      data: { data: res, message },
    } = response;
    console.log('user', response);
    if (response.data.message!=="Invalid Username or Password") {

      RestClient.setHeader(
        'Authorization',
        `Bearer ${response?.data?.data?.token}`
      );
      push('/dashboard')

      yield put({ type: SIGN_IN_SUCCESS, payload: response.data.data });
      yield put({ type: FETCH_TASK, payload: null });
    } else {
      yield put({ type: SIGN_IN_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: SIGN_IN_FAILURE, error });
  } finally {
  }
}