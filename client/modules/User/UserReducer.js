/**
 * Created by Vitaliy on 21.10.2016.
 */

const initialState = {data: [], token: ''};
import {REPLACE_TOKEN, ADD_USERS} from './UserAction';

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_TOKEN:
      return {
          ...state,
         token: action.authentication_token || ''
      };
    case ADD_USERS:
      return {
        ...state,
        data: action.users,
      };
    default:
      return state;
  }
};

export const getUsers = state => state.user.data;

export default UserReducer;
