import axios from 'axios';

import {
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_ERROR
} from './actionTypes';

import { request, success, error } from '../shared/redux/baseActions';

export const fetchCoins = () => dispatch => {
  // Dispatching our request action
  dispatch(request(FETCH_COINS_REQUEST));

  const axiosPromise = axios.get('http://localhost:4000/api/coins');

  axiosPromise
    .then(response => dispatch(success(FETCH_COINS_SUCCESS, response.data)))
    .catch(err => dispatch(error(FETCH_COINS_ERROR)));
}
