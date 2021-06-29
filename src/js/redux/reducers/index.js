import { LangReducer, ThemeReducer } from "./global";
import { combineReducers } from "redux";

const AppReducers = combineReducers({
    lang: LangReducer,
    theme: ThemeReducer,
});

export default AppReducers;
