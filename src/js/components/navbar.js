import cx from "classnames";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import GlobalRoutes from "../routes";
import navbar from "../../sass/components/navbar.module.sass";
import utils from "../../sass/components/utils.module.sass";

const RouteLinks = GlobalRoutes.map((r) => (
    <li key={uuid()} className={navbar.item}>
        <Link to={r.url}>{r.name}</Link>
    </li>
));

const NavBar = () => {
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
                <ul className={navbar.links}>
                    {RouteLinks}
                    <div className={navbar.divider}>
                        <hr />
                    </div>
                    <button className={navbar.buttonItem}>Dark Theme</button>
                </ul>
            </aside>
            <section className={navbar.dimmer} data-hh-expanded={expanded}></section>
        </Fragment>
    );
};

export default NavBar;
