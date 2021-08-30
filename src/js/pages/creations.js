import cx from "classnames";
import { v4 as uuid } from "uuid";
import css from "../../sass/pages/creations.module.sass";
import utils from "../../sass/components/utils.module.sass";
import grid from "bootstrap/dist/css/bootstrap-grid.module.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const technicalProjects = [
    {
        name: "MacOS BootUSB",
        description: "Create macOS bootable USB outside of MAS.",
        url: "https://github.com/htmm/macos-bootable-usb",
        hosting: "GitHub",
        lang: "shell",
    },
    {
        name: "TLCL",
        description: "Burmese translation of The Linux Command Line Book",
        url: "https://github.com/htmm/the-linux-command-line",
        hosting: "GitHub",
        lang: "React",
    },
    {
        name: "Bare",
        description: "Simple, lightweight modern PHP without framework",
        url: "https://github.com/heinthanth/bare",
        hosting: "GitHub",
        lang: "PHP",
    },
    {
        name: "COVID 19 API",
        description: "Just COVID 19 tracker API",
        url: "https://github.com/phonemyatkhine/covidapi",
        hosting: "GitHub",
        lang: "Express.js",
    },
    {
        name: "UIT-LANG",
        description: "Just a TOY programming language",
        url: "https://github.com/uitverse/uit-lang",
        hosting: "GitHub",
        lang: "Java",
    },
    {
        name: "Better Mirror",
        description: "Just a script that select fastest Kali mirror",
        url: "https://github.com/htmm/better-mirror",
        hosting: "GitHub",
        lang: "Python3",
    },
    {
        name: "HexFonts",
        description: "Cross-platform application to install Google Fonts",
        url: "https://github.com/heinthanth/h3xfonts",
        hosting: "GitHub",
        lang: "Electron.js",
    },
];

const musicProjects = [
    {
        name: "Reveal",
        description: "Nothing, but, just a Future Bass track",
        url: "https://soundcloud.com/heinthanth/reveal",
        hosting: "SoundCloud",
        lang: "FL Studio",
    },
    {
        name: "Learn to Meow ( preview ) ",
        description: "Learn to Meow remix",
        url: "https://soundcloud.com/heinthanth/learn-to-meow",
        hosting: "SoundCloud",
        lang: "FL Studio",
    },
];

const ProjectList = ({ list }) => {
    const theme = useSelector((state) => state.theme);

    return list.map((p) => (
        <div
            key={uuid()}
            className={cx(grid["col-md-6"], grid["col-lg-4"], css.grid)}
        >
            <div data-hh-theme={theme} className={css.card}>
                {/* <div className={css.cardImage}></div> */}
                <div className={css.cardContent}>
                    <h1>{p.name}</h1>
                    <p>{p.description}</p>
                </div>
                <div className={css.cardFooter}>
                    <div>It's on&nbsp;</div>
                    <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Go to ${p.hosting}`}
                    >
                        {p.hosting}
                    </a>
                    <span>{p.lang}</span>
                </div>
            </div>
        </div>
    ));
};
const CreationsPage = () => (
    <Fragment>
        <section className={css.page}>
            <div className={utils.container}>
                <section className={css.section}>
                    <h1>Technical</h1>
                    <p>
                        Just projects that are related with computers,
                        electronic devices, etc.
                    </p>
                </section>
                <div className={cx(grid.row, css.showGrid)}>
                    <ProjectList list={technicalProjects} />
                </div>
                <section className={css.section}>
                    <h1>Music</h1>
                    <p>
                        Just some electronic music that I made in free time. (
                        Not Good, BTW! )
                    </p>
                </section>
                <div className={cx(grid.row, css.showGrid)}>
                    <ProjectList list={musicProjects} />
                </div>
            </div>
        </section>
        <footer className={css.footer}>
            <div className={utils.container}>
                (c) 2021 Hein Thant Maung Maung.
            </div>
        </footer>
    </Fragment>
);

export default CreationsPage;
