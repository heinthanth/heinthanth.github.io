import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import { themeState } from "./states/theme";
import appStateReducer from "./states";

// prettier-ignore
export interface appState { theme: themeState; }

const makeStore = (context: Context) => createStore(appStateReducer);
export const wrapper = createWrapper<Store<appState>>(makeStore);
