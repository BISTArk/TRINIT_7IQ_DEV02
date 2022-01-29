import { combineReducers } from "redux";
import { signUpReducer } from "./authReducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

export default rootReducer;
