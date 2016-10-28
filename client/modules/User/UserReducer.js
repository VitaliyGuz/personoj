/**
 * Created by Vitaliy on 21.10.2016.
 */

const initialState = {};
import {REPLACE_TOKEN} from './UserAction';

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_TOKEN:
      return action.authentication_token || state;
    default:
      return state;
  }
};

export default UserReducer;
