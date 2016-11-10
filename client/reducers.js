/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
//noinspection JSUnresolvedVariable
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import people from './modules/Person/PersonReducer';
import user from './modules/User/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  people,
  user
});
