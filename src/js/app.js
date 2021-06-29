import "../sass/fonts.sass";
import "../sass/app.sass";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import AppReducers from "./redux/reducers";
import { useDispatch } from "react-redux";
import { setTheme } from "./redux/actions/global";

const HomePage = loadable((props) => import("./pages/home"));
const NavBar = loadable((props) => import("./components/navbar"));

const GlobalStore = createStore(
    AppReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const HeinHein = () => {
    return (
        <Provider store={GlobalStore}>
            <App />
        </Provider>
    );
};

const App = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        let theme = window.matchMedia("(prefers-color-scheme: dark)");
        theme.addEventListener("change", (e) =>
            dispatch(setTheme(e.matches ? "dark" : "light"))
        );
        dispatch(setTheme(theme.matches ? "dark" : "light"));
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div id="hh-root" data-hh-theme={theme}>
                <NavBar />
                <Switch>
                    <Route>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default HeinHein;
