import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import componentReducer from "./component.reducer";

export default combineReducers({
  authReducer,
  componentReducer,
});
