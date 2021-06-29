import { compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AllReducers from "./reducers";

const persistConfig = { key: "hh-root", storage };
const persistedReducer = persistReducer(persistConfig, AllReducers);

const composeEnhancers =
    process.env.NODE_ENV === "production"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;
const storeEnhancers = composeEnhancers();

export const store = createStore(persistedReducer, storeEnhancers);
export const persistor = persistStore(store);
