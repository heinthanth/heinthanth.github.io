import { Context, createWrapper } from "next-redux-wrapper";
import { compose, createStore, Store } from "redux";
import { ThemeState } from "./states/theme";
import appStateReducer from "./states";

// prettier-ignore
export interface AppState { theme: ThemeState; }

const composeEnhancers =
  (typeof window !== "undefined" &&
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose)) ||
  compose;

const enhancer = composeEnhancers();

const makeStore = (_context: Context) => createStore(appStateReducer, enhancer);
export const wrapper = createWrapper<Store<AppState>>(makeStore);
