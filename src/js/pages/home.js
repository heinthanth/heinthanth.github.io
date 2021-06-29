import cx from "classnames";
import { v4 as uuid } from "uuid";
import homepage from "../../sass/pages/home.module.sass";
import utils from "../../sass/components/utils.module.sass";

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

const HomePage = () => (
    <section className={cx(homepage.home, utils.container)}>
        <div className={homepage.intro}>
            <h1>Hein Thant</h1>
            <p>
                Just a CS student, Full-stack Web Developer, Junior DevOps and
                Linux Lover
            </p>
        </div>
        <div className={homepage.bottomNavigator}>
            <div className={cx(utils.container, utils.flexItem)}>
                <ul>{SocialLinks}</ul>
                <div className={homepage.bottomButtons}>
                    <button aria-label="Go to Next Page">
                        <i className="bi bi-arrow-right-square"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default HomePage;
