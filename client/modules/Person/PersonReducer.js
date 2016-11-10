/**
 * Created by Vitaliy on 26.10.2016.
 */

import {
  ADD_PERSON,
  ADD_PEOPLE,
  DELETE_PERSON,
  REPLACE_PERSON,
  ADD_PERSON_ATTRIBUTE,
  ADD_PERSON_ATTRIBUTES,
  CONFIRM_PERSON_CHANGES
} from './PersonActions';

// Initial State
const initialState = { data: [], attributes: [] };

const PersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON :
      return {
        ...state,
        data: [action.person, ...state.data],
      };

    case ADD_PEOPLE :
      return {
        ...state,
        data: action.people,
      };

    case DELETE_PERSON :
      return {
        ...state,
        data: state.data.filter(person => person.cuid !== action.cuid),
      };

    case REPLACE_PERSON :
      return {
        ...state,
        data: state.data.map(obj => action.person.cuid === obj.cuid ? action.person : obj)
      };

    case ADD_PERSON_ATTRIBUTE :
      return {
        ...state,
        attributes: [action.personAttribute, ...state.attributes],
      };

    case ADD_PERSON_ATTRIBUTES :
      return {
        ...state,
        attributes: action.personAttributes,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all people
export const getPeople = state => state.people.data;

// Get person by cuid
export const getPerson = (state, cuid) => state.people.data.filter(person => person.cuid === cuid)[0];

// Get all person attributes
export const getPersonAttributes = state => state.people.attributes;

// Get person attribute by cuid
export const getPersonAttribute = (state, cuid) => state.people.attributes.filter(personAttribute => personAttribute.cuid === cuid)[0];

// Export Reducer
export default PersonReducer;
