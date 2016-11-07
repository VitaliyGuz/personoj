import fetch from 'isomorphic-fetch';
import Config from '../../server/config';
//noinspection JSUnresolvedVariable
import {browserHistory} from 'react-router';

//noinspection JSUnresolvedVariable
export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

const checkStatus = (response) => {
  console.log(response.status);
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    if (typeof window !== 'undefined' && response.status === 401) {
      localStorage.removeItem('authentication_token');
      browserHistory.push('/');
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error
    }
    return Promise.reject(response);
  }
};

const parseJSON = (response) => {
  if (response && response.json) {
    return response.json();
  } else {
    throw new Error('Response not contain JSON')
  }
};

export default function callApi(endpoint, method = 'get', body) {
  //noinspection JSUnresolvedFunction
  return fetch(`${API_URL}/${endpoint}`, {
    headers: {'Content-Type': 'application/json', "Authorization": 'JWT ' + getAuthenticationToken()},
    method,
    body: JSON.stringify(body),
  })
    .then(response => {
      return checkStatus(response);
    }).then(parseJSON)
    .catch((error) => {
      console.log('request failed', error);
      throw error;
    });
}


export const getAuthenticationToken = () => {
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    return localStorage.authentication_token
  }
};

export const isLoggedIn = () => {
  return !!getAuthenticationToken();
};
