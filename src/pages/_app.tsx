import type { AppProps } from "next/app";
import { FC, Fragment } from "react";
import NavBar from "../components/navbar";
import Head from "../components/head";
import "../sass/app.sass";
import dynamic from "next/dynamic";
import { wrapper } from "../redux/store";

const FloatActionButton = dynamic(() => import("../components/actionbtn"), { ssr: false });

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/space.webmanifest" />
      <meta key="color-scheme" name="color-scheme" content="light" />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <FloatActionButton />
  </Fragment>
);

export default wrapper.withRedux(App);
