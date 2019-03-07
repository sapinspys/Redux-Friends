import { FETCH_FRIENDS, ADDING_FRIEND, DELETING_FRIEND, SUCCESS, FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  addingFriend: false,
  deletingFriend: false,
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
    case DELETING_FRIEND:
      return {
        ...state,
        deletingFriend: true,
        error:null,
      }
    case SUCCESS:
      return {
        ...state,
        addingFriend: false,
        fetchingFriends: false,
        deletingFriend: false,
        friends: action.payload,
        error: null,
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        friends: [],
        fetchingFriends: false,
        addingFriend: false,
        deletingFriend: false,
      }
    default:
      return state;
  }
}