import { FETCH_FRIENDS, ADDING_FRIEND, SUCCESS, FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  addingFriend: false,
  friends: [],
  error: null,
}

export const friendReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        fetchingFriends: true,
        error: null,
      }
    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true,
        error:null,
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