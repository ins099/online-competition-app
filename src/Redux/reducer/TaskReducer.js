import {  FETCH_TASK_SUCCESS,EMPTY_TASK_SUCCESS } from '../actionTypes';
  
  const initialState = {
    username:""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
     
      case FETCH_TASK_SUCCESS: {
        return { ...state, ...action.payload };
      }
     
      case EMPTY_TASK_SUCCESS: {
        return { ...action.payload };
      }
    
      default:
        return state;
    }
  };