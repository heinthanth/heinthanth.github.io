import "../sass/app.sass";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import ReactGA from "react-ga";

const HomePage = loadable((props) => import("./pages/home"));
const NavBar = loadable((props) => import("./components/navbar"));
const Error404 = loadable((props) => import("./pages/error-404"));
const AdminPage = loadable((props) => import("./pages/admin/index"));

const HeinHein = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

const App = () => {
    const location = useLocation();
    const theme = useSelector((state) => state.theme);

    useEffect(() => {
        if (process.env.NODE_ENV === "production")
            ReactGA.initialize("UA-140479987-2", {
                debug: process.env.NODE_ENV === "development",
            });
    }, []);

    const sendGA = (path) => {
        ReactGA.set({ page: path });
        ReactGA.pageview(path);
    }; // I don't want to declare in useEffect loop

    useEffect(() => {
        if (process.env.NODE_ENV === "production")
            sendGA(location.pathname + location.search);
    }, [location]);

    return (
        <div id="hh-root" data-hh-theme={theme}>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
        </div>
    );
};

export default HeinHein;
