import { combineReducers } from "redux";
import { themeReducer } from "./theme";

const appStateReducer = combineReducers({
  theme: themeReducer,
});

export default appStateReducer;
