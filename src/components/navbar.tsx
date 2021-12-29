import Link from "next/link";
import { useRouter } from "next/router";
import type { UrlObject } from "url";
import { createRef, MouseEventHandler, ReactNode, useCallback, useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import cx from "classnames";
import css from "../sass/components/navbar.module.sass";

const navbarRoutes: {
  uri: string;
  label: ReactNode;
  ariaLabel?: string;
}[] = [
  { uri: "/", ariaLabel: "Go to website Home Page", label: "INDEX ZERO" },
  { uri: "/about", ariaLabel: "Read more about Hein Thant", label: "WHO AM I" },
  { uri: "/creations", ariaLabel: "Explore Hein Thant's creations", label: "CREATIONS" },
  { uri: "/articles", ariaLabel: "Read articles From Hein Thant", label: "ARTICLES" },
  { uri: "/contact", ariaLabel: "Get in touch with Hein Thant", label: "CONTACT ME" },
]; // nav routes

const NavLink = ({
  children,
  to,
  ariaLabel,
  showIndicator,
  currentRoute,
  ...rest
}: {
  children?: ReactNode;
  to: string | UrlObject;
  as?: string | UrlObject;
  ariaLabel?: string;
  showIndicator?: boolean;
  currentRoute?: boolean;
  onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
  onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div {...rest} className={cx(css.navLink)} data-active-link={currentRoute}>
    <Link href={to}>
      <a
        className={cx("py-2 md:py-4 md:px-3", showIndicator && "font-bold")}
        aria-label={ariaLabel}
        aria-current={currentRoute ? "page" : undefined}
      >
        {children}
      </a>
    </Link>
    {showIndicator && (
      <motion.span initial={false} layoutId="navbarIndicator" className={css.indicator} />
    )}
  </div>
);

const NavBar = () => {
  const navbar = createRef<HTMLDivElement>();
  const { asPath } = useRouter();
  const p = asPath.split(/[?#]/)[0];
  // prettier-ignore
  const initIndex = navbarRoutes.findIndex(({ uri }) =>
    uri === "/" ? p === uri : p.includes(uri));
  const currentRouteIndex = initIndex === -1 ? 0 : initIndex;
  const [indicatorIndex, setIndicatorIndex] = useState(currentRouteIndex);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("#hh-main-navbar");
    let previousScroll = window.scrollY;
    const scrollListener = () =>
      (window.scrollY <= 20
        ? navbar?.classList.add("shadow-none", css.transparent)
        : navbar?.classList.remove("shadow-none", css.transparent),
      true) &&
      Math.abs(previousScroll - window.scrollY) >= 100 &&
      (previousScroll > (previousScroll = window.scrollY)
        ? navbar?.classList.remove(css.navbarHidden)
        : navbar?.classList.add(css.navbarHidden));
    // scrollListener(); // called on startup
    window.addEventListener("scroll", scrollListener);
    return () => scrollListener && window.removeEventListener("scroll", scrollListener);
  }, []);

  // prettier-ignore
  const toggleNavbar = (shouldOpen: boolean) => (
    shouldOpen
      ? document.body.classList.add("overflow-hidden", "md:overflow-auto")
      : document.body.classList.remove("overflow-hidden", "md:overflow-auto"),
    setNavbarOpen(shouldOpen));

  return (
    <nav
      role="navigation"
      ref={navbar}
      className={cx(
        "navbar bg-neutral overflow-hidden md:h-[1px] min-h-[80px] p-0 fixed w-full text-neutral-content",
        css.navbar,
        css.transparent
      )}
      id="hh-main-navbar"
      data-navbar-md-expanded={navbarOpen}
    >
      <div className="container overflow-hidden h-full md:h-[unset] justify-between p-4 md:px-5 md:py-0 mx-auto flex flex-col md:flex-row items-start md:items-center">
        <div className="flex w-full md:w-[unset] items-center justify-between mt-3 md:mt-0">
          <div className={cx(css.logo, "md:flex items-center")}>
            <Link href="/">
              <a className="py-4">
                HIIIiN<small className="opacity-0 text-xs whitespace-nowrap">&apos;s space</small>
              </a>
            </Link>
            <span className={css.indicator}></span>
          </div>
          <button
            onClick={() => toggleNavbar(!navbarOpen)}
            className="flex w-[24px] h-[24px] items-center space-x-2 focus:outline-none md:hidden"
            aria-label="Toggle Navigation bar"
            aria-controls="main-nav-menubar"
            aria-expanded={navbarOpen}
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={cx(
                  "transform transition w-full h-[2px] bg-current absolute",
                  navbarOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                )}
              ></span>
              <span
                className={cx(
                  "transform transition w-full h-[2px] bg-current absolute",
                  navbarOpen ? "opacity-0 translate-x-3" : "opacity-100"
                )}
              ></span>
              <span
                className={cx(
                  "transform transition w-full h-[2px] bg-current absolute",
                  navbarOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                )}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={cx(
            "flex items-center overflow-hidden w-full md:h-[unset]",
            navbarOpen ? "h-[200px]" : "h-0"
          )}
          id="main-nav-menubar"
        >
          <AnimateSharedLayout>
            <ul className="md:mt-0 md:inline-flex md:ml-auto">
              {navbarRoutes.map((route, index) => {
                const isCurrentRoute = currentRouteIndex === index;
                const shouldShowIndicator = indicatorIndex === index;
                return (
                  <li
                    className={cx("text-sm py-2 md:py-4 flex items-center", css.navItem)}
                    key={index}
                  >
                    <NavLink
                      onMouseOver={() => setIndicatorIndex(index)}
                      onMouseLeave={() => setIndicatorIndex(currentRouteIndex)}
                      to={route.uri}
                      ariaLabel={route.ariaLabel}
                      currentRoute={isCurrentRoute}
                      showIndicator={shouldShowIndicator}
                    >
                      {route.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </AnimateSharedLayout>
        </div>
        <div className={cx("md:hidden overflow-hidden", !navbarOpen && "h-0 py-0")}>
          me@heinthant.space
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
