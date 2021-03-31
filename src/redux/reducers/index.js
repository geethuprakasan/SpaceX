import { combineReducers } from "redux";
import { spaceXReducer } from "./spaceXReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  spaceX: spaceXReducer,
});

export default rootReducer;
