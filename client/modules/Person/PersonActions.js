/**
 * Created by Vitaliy on 26.10.2016.
 */

import callApi from '../../util/apiCaller';
//noinspection JSUnresolvedVariable
import { browserHistory } from 'react-router';

// Export Constants
export const ADD_PERSON = 'ADD_PERSON';
export const REPLACE_PERSON = 'REPLACE_PERSON';
export const ADD_PEOPLE = 'ADD_PEOPLE';
export const DELETE_PERSON = 'DELETE_PERSON';
export const ADD_PERSON_ATTRIBUTE = 'ADD_PERSON_ATTRIBUTE';
export const ADD_PERSON_ATTRIBUTES = 'ADD_PERSON_ATTRIBUTES';
export const CONFIRM_PERSON_CHANGES = 'CONFIRM_PERSON_CHANGES';


// Export Actions
export function addPerson(person) {
  return {
    type: ADD_PERSON,
    person,
  };
}

export function addPeople(people) {
  return {
    type: ADD_PEOPLE,
    people,
  };
}

export function replacePerson(person) {
  return {
    type: REPLACE_PERSON,
    person,
  };
}

export function deletePerson(cuid) {
  return {
    type: DELETE_PERSON,
    cuid,
  };
}

export function confirmPersonChanges(cuid) {
  return {
    type: CONFIRM_PERSON_CHANGES,
    cuid,
  };
}

export function addPersonAttribute(personAttribute) {
  return {
    type: ADD_PERSON_ATTRIBUTE,
    personAttribute,
  };
}

export function addPersonAttributes(personAttributes) {
  return {
    type: ADD_PERSON_ATTRIBUTES,
    personAttributes,
  };
}


export function addPersonRequest(person) {
  return (dispatch) => {
    return callApi('people', 'post', {
      person: person,
    }).then(res =>
      dispatch(addPerson(res.person)));
  };
}

export function updatePersonRequest(cuid, person) {
  return (dispatch) => {
    return callApi('people/' + cuid, 'put', {
      person: person,
    }).then(res => {
      dispatch(replacePerson(res.person));
      browserHistory.push('/people/' + res.person.cuid)
    });
  };
}

export function fetchPeople() {
  return (dispatch) => {
    return callApi('people').then(res => {
      dispatch(addPeople(res.people));
    });
  };
}

export function fetchPerson(cuid) {
  return (dispatch) => {
    return callApi(`people/${cuid}`).then(res =>
      dispatch(addPerson(res.person)));
  };
}

export function deletePersonRequest(cuid) {
  return (dispatch) => {
    return callApi(`people/${cuid}`, 'delete').then(() =>
      dispatch(deletePerson(cuid)));
  };
}

export function confirmPersonChangesRequest(cuid) {
  return (dispatch) => {
    return callApi(`confirmPersonChanges/${cuid}`).then(res => {
        dispatch(replacePerson(res.person));
      }
    );
  };
}


export function addPersonAttributeRequest(personAttribute) {
  return (dispatch) => {
    return callApi('personAttributes', 'post', {
      personAttribute: personAttribute,
    }).then(res => dispatch(addPersonAttribute(res.personAttribute)));
  };
}

export function fetchPersonAttributes() {
  return (dispatch) => {
    return callApi('personAttributes').then(res => {
      dispatch(addPersonAttributes(res.personAttributes));
    });
  };
}

export function fetchPersonAttribute(cuid) {
  return (dispatch) => {
    return callApi(`personAttributes/${cuid}`).then(res =>
      dispatch(addPersonAttribute(res.personAttribute)));
  };
}


