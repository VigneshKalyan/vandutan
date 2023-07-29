// src/actions/userActions.js
import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUserProfile = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const data = await response.json();
    if (response.ok) {
      // Dispatch fetch user success action
      dispatch(fetchUserSuccess(data));
    } else {
      // Dispatch fetch user failure action
      dispatch(fetchUserFailure(data.error));
    }
  } catch (error) {
    // Dispatch fetch user failure action for fetch or other errors
    dispatch(fetchUserFailure('An error occurred. Please try again later.'));
  }
};
