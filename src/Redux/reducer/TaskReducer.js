import {  FETCH_TASK_SUCCESS,EMPTY_TASK_SUCCESS } from '../actionTypes';
  
  const initialState =[]
  
  export default (state = initialState, action) => {
    switch (action.type) {
     
      case FETCH_TASK_SUCCESS: {
        return [...action.payload] 
      }
     
      case EMPTY_TASK_SUCCESS: {
        return []
      }
    
      default:
        return state;
    }
  };