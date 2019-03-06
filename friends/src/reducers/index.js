import { combineReducers } from 'redux';

import { FETCH_FRIENDS, SUCCESS, FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  friends: [],
  error: null,
}

const fetchingReducer = (state = initialState, action) => {
  switch(action.typpes) {
    case FETCH_FRIENDS:
      return {
        ...state,
        fetchingFriends: true,
      }
    case SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        friends: [],
      }
    default:
      return state;
  }
}

export default combineReducers({
  fetchingReducer,
})