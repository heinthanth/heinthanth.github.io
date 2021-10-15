import css from "../../sass/pages/about.module.sass";
import utils from "../../sass/components/utils.module.sass";
import { Link } from "react-router-dom";

const AboutPage = () => (
    <section className={css.page}>
        <div className={utils.container}>
            <section className={css.section}>
                <h1>About Me</h1>
                <p>Just some BORING STORY about me!</p>
            </section>
            <p>
                Hein Thant Maung Maung is a Full-stack web developer, Flutter
                developer, Linux Lover and open source enthusiastic. He was born
                in 2002, Paung, Mon state, Myanmar. As his parents is a
                electronic shopkeeper and service-men, he was familiar with
                electrical components, devices.
            </p>
            <p>
                At the age of 10, he was given to a computer class to learn
                computer basics with Windows 7. Since there, he found the world
                where he want to explore. After that 3-months class, he read,
                experiment various computer techniques and become good enough at
                using MS windows OS. But, there’s is one thing he want to know,
                learn, which is How Computer Softwares are developed?
            </p>
            <p>
                Luckily, he got a book named “The Hacker's Underground Handbook”
                by David Melnichuk. From that book, he got a hints to know how
                hacking was. From that book, he got a motivation to start
                Learning HTML. Then, he found the path which he love, he has
                passion. He learned HTML, CSS, JavaScript, PHP continueously.
                From a large variety of software and programming languages, he
                chose PHP as starting point to both Web Development world and
                CLI programming world. As he found PHP is fun, he continued
                learning PHP to OOP, MVC, PSR-7 standards.
            </p>
            <p>
                When he arrived University, he was introduced with Nodejs from
                seniors. He worked on UIT students' union project and COVID 19
                API tracker with MongoDB nodejs. And also led some workshops
                about Linux. And continueously learning till now.
            </p>
            <p>
                To sum up, he is comfortable with HTML, CSS, JavaScript ( ES6+
                ), React, PHP, Laravel, NodeJs, ExpressJs, MySQL, MongoDB,
                Python3, Nim, Go, Linux, Windows, macOS, GitHub, Server Administration, Docker, and more.
            </p>
            <p>Thanks for visiting. For contact: use Social Networks or email <a href="mailto:me@heinthanth.com"><u>me@heinthanth.com</u></a>.</p>
            <Link to="/" style={{ display: "block", marginTop: 35, textDecoration: "underline" }}>Back to Home</Link>
        </div>
    </section>
);

export default AboutPage;
