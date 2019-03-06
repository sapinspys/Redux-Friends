import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchData = () => dispatch => {
  dispatch ({ type: FETCH_FRIENDS})
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      })
    })
}