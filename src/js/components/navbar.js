import cx from "classnames";
import { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import GlobalRoutes from "../routes";
import navbar from "../../sass/components/navbar.module.sass";
import utils from "../../sass/components/utils.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/actions/global";

const RouteLinks = GlobalRoutes.map((r) => (
    <li key={uuid()} className={navbar.item}>
        <span className={navbar.linkItem}>{r.name}</span>
    </li>
));

const NavBar = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const [expanded, setExpanded] = useState("collapsed");

    return (
        <Fragment>
            <nav className={navbar.navbar}>
                <div className={cx(utils.container, utils.flexItem)}>
                    <a href="/" className={navbar.logo}>
                        HIIIiN
                        <small className={navbar.logotail}> is me</small>
                    </a>
                    <button
                        className={navbar.toggler}
                        onClick={() => setExpanded("expanded")}
                        aria-label="Open Menu"
                    >
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </nav>
            <aside data-hh-expanded={expanded} className={navbar.sidenav}>
                <div className={navbar.header}>
                    <a href="/" className={navbar.logo}>
                        HIIIiN
                        <small className={navbar.logotail}> is me</small>
                    </a>
                    <button
                        className={navbar.closeSideNav}
                        aria-label="Close Side-Menu"
                        onClick={() => setExpanded("collapse")}
                    >
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                <div className={navbar.rest}>
                    <ul className={navbar.links}>
                        {RouteLinks}
                        {process.env.NODE_ENV === "production" &&
                        navigator.userAgent === "ReactSnap" ? (
                            <Fragment>
                                <li className={navbar.item}>
                                    <a
                                        className={navbar.linkItem}
                                        href="/admin"
                                    >
                                        Admin
                                    </a>
                                </li>
                                <li className={navbar.item}>
                                    <a
                                        className={navbar.linkItem}
                                        href="/404.html"
                                    >
                                        E-404
                                    </a>
                                </li>
                            </Fragment>
                        ) : null}
                    </ul>
                    <div className={navbar.divider}>
                        <hr />
                    </div>
                    <button
                        aria-label="Change Theme to Dark"
                        className={cx(navbar.buttonItem, navbar.themeToggler)}
                        data-hh-theme={theme}
                        onClick={() =>
                            dispatch(
                                setTheme(theme === "light" ? "dark" : "light")
                            )
                        }
                    >
                        {theme === "light" ? (
                            <Fragment>
                                Dark ( <i className="bi bi-moon"></i> )
                            </Fragment>
                        ) : (
                            <Fragment>
                                Light ( <i className="bi bi-sun"></i> )
                            </Fragment>
                        )}
                    </button>
                </div>
            </aside>
            <section
                className={navbar.dimmer}
                data-hh-theme={theme}
                data-hh-expanded={expanded}
                onClick={() => setExpanded("collapse")}
            ></section>
        </Fragment>
    );
};

export default NavBar;
