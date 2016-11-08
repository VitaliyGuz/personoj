/**
 * Created by Vitaliy on 21.10.2016.
 */

import callApi from '../../util/apiCaller';
import {browserHistory} from 'react-router';

export const REPLACE_TOKEN = 'REPLACE_TOKEN';
export const ADD_USERS = 'ADD_USERS';


export function restoreAuthenticationTokenFromCache() {
  let authentication_token
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    authentication_token = localStorage.getItem('authentication_token');
  }
  return {
    type: REPLACE_TOKEN,
    authentication_token
  };
}

export function addUserRequest(user) {
  return (dispatch) => {
    return callApi('users/registration', 'post', {user}).then(res => {
      localStorage.setItem('authentication_token', res.token);
      browserHistory.push('/');
    });
  };
}

export function updateUserRequest(user) {
  return (dispatch) => {
    return callApi('users/update', 'post', { user }).then(res => {
      browserHistory.push('/');
    });
  };
}

export function signInRequest(creds) {
  return (dispatch) => {
    return callApi('auth', 'post', creds).then(res => {
      localStorage.setItem('authentication_token', res.token);
      browserHistory.push('/');
    }).catch((error) => {
      browserHistory.push('/');
    });
  };
}

export function addUsers(users) {
  return {
    type: ADD_USERS,
    users,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    return callApi('users').then(res => {
      dispatch(addUsers(res.users));
    });
  };
}

