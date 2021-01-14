import axios from 'axios';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from './types';

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }));
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const login = (body) => (dispatch) => {
  axios
    .post('/api/auth', body, { 'Content-Type': 'application/json' })
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
      })
    );
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
