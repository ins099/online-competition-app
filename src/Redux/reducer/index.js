import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
  UserProfileReducer,
  TaskReducer
});