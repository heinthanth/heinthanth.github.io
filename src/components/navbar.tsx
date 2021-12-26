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
        role="menuitem"
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

  useEffect(() => {
    if (!navbar.current) return;
    let scrollListener: () => void;

    import("cash-dom").then(({ default: $ }) => {
      let previousScroll = window.scrollY;
      scrollListener = () =>
        previousScroll > (previousScroll = window.scrollY)
          ? previousScroll === 0
            ? $(navbar.current).removeClass("shadow-sm") // reach top
            : $(navbar.current)
                .addClass("shadow-sm")
                .removeClass("md:top-[-80px]")
                .addClass("md:top-[0px]")
          : $(navbar.current)
              .removeClass("shadow-sm")
              .addClass("md:top-[-80px]")
              .removeClass("md:top-[0px]");
      window.addEventListener("scroll", scrollListener);
    });
    return () => scrollListener && window.removeEventListener("scroll", scrollListener);
  }, [navbar]);

  return (
    <nav
      role="navigation"
      ref={navbar}
      className={cx(
        "navbar overflow-hidden h-full md:h-[1px] min-h-[80px] md:top-[0px] p-0 fixed w-full",
        css.navbar
      )}
    >
      <div className="container h-full md:h-[unset] justify-between p-4 md:px-5 md:py-0 mx-auto flex flex-col md:flex-row items-start md:items-center">
        <div className={css.logo}>
          <Link href="/">
            <a className="py-4">
              HIIIiN<small className="opacity-0 text-xs">.space</small>
            </a>
          </Link>
          <span className={css.indicator}></span>
        </div>
        <div className="flex items-center w-full">
          <AnimateSharedLayout>
            <ul role="menu" className="md:mt-0 md:inline-flex md:ml-auto">
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
        <div className="md:hidden">me@heinthant.space</div>
      </div>
    </nav>
  );
};

export default NavBar;
