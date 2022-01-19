
import { put, call, all, select } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constant/network';

import { RestClient } from '../../network/RestClient';
import {
    FETCH_TASK_SUCCESS,
    FETCH_TASK_FAILURE,
    SUBMIT_ENTRY_SUCCESS,
    SUBMIT_ENTRY_FAILURE,
} from '../actionTypes';
import { push } from 'react-router-redux'

import { ActionWithoutPayload } from '../actions';
import { toast } from 'react-toastify';

export function* submitEntrySaga({ payload }) {
  try {

    const formData = new FormData();
    formData.append("asdasd","ASDS")
    console.log(payload)
    Object.keys(payload).map(e=>{
        formData.append(e,payload[e])
    })
    
  
    const response = yield call(() => RestClient.post(API_ENDPOINTS.entry,formData));
    if (response.problem === 'NETWORK_ERROR') {
        toast.error('Network Error');
    }
    const {
      data: { data: res, message },
    } = response;
    console.log('task', response);

    if (response.data.message==="Successfully submitted the entry") {
        payload.navigate('/dashboard')
        toast.success("Entry submitted successfuly")
        yield put(ActionWithoutPayload(SUBMIT_ENTRY_SUCCESS))

    } else {

        toast.error("Entry submission failure")

        yield put(ActionWithoutPayload(SUBMIT_ENTRY_FAILURE))

    }
  } catch (error) {
    // yield put({ type: FETCH_TASK_FAILURE, payload: null });
      
  } finally {
  }
}