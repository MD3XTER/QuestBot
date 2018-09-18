import { combineReducers } from "redux";
import appReducers from "./App/appReducers";

export default combineReducers({
  app: appReducers
});
