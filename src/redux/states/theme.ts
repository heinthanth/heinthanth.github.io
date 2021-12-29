import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

export const SET_THEME = "SET_THEME";

// prettier-ignore
export interface themeState { value: string }
// prettier-ignore
export interface themeAction { type: string; payload: themeState }

export const themeReducer = (
  state: themeState = { value: "light" },
  action: themeAction | AnyAction
): themeState =>
  action.type === SET_THEME
    ? { value: action.payload.value || state.value }
    : { value: action.payload?.theme.value || state.value };

export const themeNegate = (theme: string): string => (theme === "dark" ? "light" : "dark");
export const themeSet = (value: string): themeAction => ({ type: SET_THEME, payload: { value } });
