import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_ORGANIZER_REQUEST,
  REGISTER_ORGANIZER_SUCCESS,
  REGISTER_ORGANIZER_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL
} from "../types";

export const signUpUserReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        processing: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        processing: false,
        userInfo: action.payload,
      };

    case REGISTER_USER_FAIL:
      return {
        processing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const signUpOrganizerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_ORGANIZER_REQUEST:
      return {
        processing: true,
      };
    case REGISTER_ORGANIZER_SUCCESS:
      return {
        processing: false,
        userInfo: action.payload,
      };

    case REGISTER_ORGANIZER_FAIL:
      return {
        processing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const signInReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        processing: true,
      };
    case SIGNIN_SUCCESS:
      return {
        processing: false,
        userInfo: action.payload,
      };

    case SIGNIN_FAIL:
      return {
        processing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const signOutReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNOUT_REQUEST:
      return {
        processing: true,
      };
    case SIGNOUT_SUCCESS:
      return {
        processing: false,
        userInfo: action.payload,
      };

    case SIGNOUT_FAIL:
      return {
        processing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
