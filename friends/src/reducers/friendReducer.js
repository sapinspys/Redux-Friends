import { FETCH_FRIENDS, SUCCESS, FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  friends: [],
  error: null,
}

export const fetchingReducer = (state = initialState, action) => {
  switch(action.typpes) {
    case FETCH_FRIENDS:
      return {
        ...state,
        fetchingFriends: true,
        error: null,
      }
    case SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
        error: null,
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        friends: [],
        fetching: false,
      }
    default:
      return state;
  }
}