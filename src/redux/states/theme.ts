import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

export const SET_THEME = "SET_THEME";

// prettier-ignore
export interface ThemeState { value: string }
// prettier-ignore
export interface ThemeAction { type: string; payload: ThemeState }

export const themeReducer = (
  state: ThemeState = { value: "light" },
  action: ThemeAction | AnyAction
): ThemeState =>
  action.type === SET_THEME
    ? { value: action.payload.value || state.value }
    : action.type === HYDRATE
    ? { value: action.payload?.theme.value || state.value }
    : state;

export const negateTheme = (theme: string): string => (theme === "dark" ? "light" : "dark");
export const setTheme = (value: string): ThemeAction => ({ type: SET_THEME, payload: { value } });
