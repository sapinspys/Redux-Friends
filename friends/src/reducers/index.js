import { combineReducers } from 'redux';
import { friendReducer, loginReducer } from './friendReducers';

export default combineReducers({
  loginReducer,
  friendReducer,
})