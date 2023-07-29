// src/reducers/userReducer.js
import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../Actions/types';

const initialState = {
  profile: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
