import cx from "classnames";
import navbar from "../../sass/components/navbar.module.sass";
import utils from "../../sass/components/utils.module.sass";
const NavBar = () => (
    <nav className={navbar.navbar}>
        <div className={cx(utils.container, utils.flexItem)}>
            <a href="/" className={navbar.logo}>
                HIIIIN
                <small className={navbar.logotail}> is me</small>
            </a>
            <button className={navbar.toggler} aria-label="Open Menu"><i className="bi bi-list"></i></button>
        </div>
    </nav>
);

export default NavBar;
