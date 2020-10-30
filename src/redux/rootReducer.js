import { combineReducers } from "redux";
import { siteReducer } from "./site/site.reducer";

export default combineReducers({
  siteData: siteReducer
});
