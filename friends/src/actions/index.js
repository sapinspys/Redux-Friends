import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const EDITTING_FRIEND = 'EDITTING_FRIEND';


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
  dispatch ({ type: EDITTING_FRIEND })
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