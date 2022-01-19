
import { put, call, all, select } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constant/network';
import { push } from 'react-router-redux'

import { RestClient } from '../../network/RestClient';
import {
    FETCH_TASK,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../actionTypes';
import { ActionWithoutPayload } from '../actions';
import { toast } from 'react-toastify';

export function* signupSaga({ payload }) {
  try {
    const {
      username = '',
    } = payload;
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.signup, {
          ...payload,
        username: username.toLowerCase(),

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
      payload.navigate('#/dashboard')
toast.success("Sign Up Success")
      yield put({ type: SIGN_IN_SUCCESS, payload: response.data.data });
      yield put({ type: FETCH_TASK, payload: null });
    } else {
      yield put({ type: SIGN_UP_FAILURE, payload: response });
toast.error("Signup Failure")

    }
  } catch (error) {
    yield put({ type: SIGN_UP_FAILURE, error });
  } finally {
  }
}