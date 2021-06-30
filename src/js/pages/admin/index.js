import cx from "classnames";
import { v4 as uuid } from "uuid";
import { Helmet } from "react-helmet";
import admin from "../../../sass/pages/home-shared.module.sass";
import utils from "../../../sass/components/utils.module.sass";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SocialLinks = [
    {
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/heintanth",
    },
    {
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/heinthanth",
    },
    {
        name: "Github",
        icon: "github",
        url: "https://github.com/heinthanth",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/heinthanth",
    },
].map((l) => (
    <li key={uuid()} className={admin.item}>
        <a href={l.url} target="_blank" rel="noreferrer" aria-label={l.name}>
            <i className={`bi bi-${l.icon}`}></i>
        </a>
    </li>
));

const AdminPage = () => (
    <Fragment>
        <Helmet>
            <title>Login Here | HIIIiN</title>
        </Helmet>
        <section className={cx(admin.home, utils.container)}>
            <div className={admin.intro}>
                <h1>Oops!</h1>
                <p>
                    Nice attempt ... FBI is
                    knocking ur door ... Ha Ha Ha ... 
                </p>
            </div>
            <div className={admin.bottomNavigator}>
                <div className={cx(utils.container, utils.flexItem)}>
                    <ul>{SocialLinks}</ul>
                    <div className={admin.bottomButtons}>
                        <Link to="/" aria-label="Go to Home Page">
                            <i className="bi bi-arrow-left-square"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default AdminPage;
