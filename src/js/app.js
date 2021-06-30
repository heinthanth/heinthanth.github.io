import "../sass/app.sass";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const HomePage = loadable((props) => import("./pages/home"));
const NavBar = loadable((props) => import("./components/navbar"));
const Error404 = loadable((props) => import("./pages/error-404"));
const AdminPage = loadable((props) => import("./pages/admin/index"));

const HeinHein = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

const App = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default HeinHein;
