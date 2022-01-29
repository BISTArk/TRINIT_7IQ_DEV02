import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

export const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        processing: true,
      };
    case REGISTER_SUCCESS:
      return {
        processing: false,
        userInfo: action.payload,
      };

    case REGISTER_FAIL:
      return {
        processing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
