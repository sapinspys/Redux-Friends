import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const EDITING_FRIEND = 'EDITING_FRIEND';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ 
        type: LOGIN_SUCCESS, 
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({ 
        type: LOGIN_FAILURE, 
        payload: err.response.data.error,
      });
    });
};

export const fetchData = () => dispatch => {
  dispatch ({ type: FETCH_FRIENDS })
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response,
      })
    })
}

export const addFriend = (friendData) => dispatch => {
  dispatch ({ type: ADDING_FRIEND })
  axios
    .post('http://localhost:5000/api/friends', friendData)
    .then(res => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response,
      })
    })
}

export const deleteFriend = (id) => dispatch => {
  dispatch ({ type: DELETING_FRIEND })
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response,
      })
    })
}

export const editFriend = (id, friendData) => dispatch => {
  dispatch ({ type: EDITING_FRIEND })
  axios
    .put(`http://localhost:5000/api/friends/${id}`, friendData)
    .then(res => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response,
      })
    })
}