import "../sass/fonts.sass";
import "../sass/app.sass";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";

const HomePage = loadable((props) => import("./pages/home"));
const NavBar = loadable((props) => import("./components/navbar"));

const HeinHein = () => {
    useEffect(() => {
        var theme = window.matchMedia("(prefers-color-scheme: dark)");
        theme.addEventListener("change", (e) => {
            document.documentElement.setAttribute(
                "hh-theme",
                e.matches ? "hh-dark" : "hh-light"
            );
        });
        document.documentElement.setAttribute(
            "hh-theme",
            theme.matches ? "hh-dark" : "hh-light"
        );
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default HeinHein;
