import { combineReducers } from "redux";
import { signUpUserReducer, signUpOrganizerReducer, signInReducer} from "./authReducer";

const rootReducer = combineReducers({
  signUpUser: signUpUserReducer,
  signUpOrganizer: signUpOrganizerReducer,
  signIn: signInReducer
});

export default rootReducer;
