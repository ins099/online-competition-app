
import { put, call, all, select } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constant/network';
import { push } from 'react-router-redux'

import { RestClient } from '../../network/RestClient';
import {
    FETCH_TASK_SUCCESS,
    FETCH_TASK_FAILURE,
} from '../actionTypes';
import { ActionWithoutPayload } from '../actions';

export function* fetchTaskSaga({ payload }) {
  try {
  
    const response = yield call(() => RestClient.get(API_ENDPOINTS.task));
    if (response.problem === 'NETWORK_ERROR') {
    //   Alert.alert('Network Error');
    }
    const {
      data: { data: res, message },
    } = response;
    console.log('task', response);
    if (response.data.message==="Successfully fetch all the task") {
      yield put({ type: FETCH_TASK_SUCCESS, payload: response.data.data  });
    } else {
      yield put({ type: FETCH_TASK_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_TASK_FAILURE, payload: null });
      
  } finally {
  }
}