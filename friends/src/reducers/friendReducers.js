import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_FRIENDS, ADDING_FRIEND, DELETING_FRIEND, EDITING_FRIEND, SUCCESS, FAILURE } from "../actions";

const initialState = {
  logginIn: false,
  fetchingFriends: false,
  addingFriend: false,
  deletingFriend: false,
  editingFriend: false,
  friends: [],
  error: null,
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        logginIn: true,
        error: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: false,
        error: null,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        logginIn: false,
        error: action.payload,
      }
    default:
      return state;
  }
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
    case EDITING_FRIEND:
      return {
        ...state,
        editingFriend: true,
      }
    case SUCCESS:
      return {
        ...state,
        addingFriend: false,
        fetchingFriends: false,
        deletingFriend: false,
        editingFriend: false,
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
        editingFriend: false,

      }
    default:
      return state;
  }
}