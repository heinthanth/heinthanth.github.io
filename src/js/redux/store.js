import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AllReducers from "./reducers";

const persistConfig = { key: "hh-root", storage };
const persistedReducer = persistReducer(persistConfig, AllReducers);

export const store = createStore(
    persistedReducer,
    process.env.NODE_ENV === "production" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
