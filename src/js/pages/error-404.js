import cx from "classnames";
import { v4 as uuid } from "uuid";
import homepage from "../../sass/pages/home-shared.module.sass";
import utils from "../../sass/components/utils.module.sass";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
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
    <li key={uuid()} className={homepage.item}>
        <a href={l.url} target="_blank" rel="noreferrer" aria-label={l.name}>
            <i className={`bi bi-${l.icon}`}></i>
        </a>
    </li>
));

const Error404 = () => (
    <Fragment>
        <Helmet>
            <title>404 - NOT FOUND</title>
        </Helmet>
        <section className={cx(homepage.home, utils.container)}>
            <div className={homepage.intro}>
                <h1>E-404</h1>
                <p>
                    Oops, the page u requested hasn't been found!
                    Check the URL or spelling ...
                </p>
            </div>
            <div className={homepage.bottomNavigator}>
                <div className={cx(utils.container, utils.flexItem)}>
                    <ul>{SocialLinks}</ul>
                    <div className={homepage.bottomButtons}>
                        <Link to="/" aria-label="Go to Home Page">
                            <i className="bi bi-arrow-left-square"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default Error404;
