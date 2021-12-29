import type { AppProps } from "next/app";
import NavBar from "../components/navbar";
import Head from "../components/head";
import "../sass/app.sass";
import dynamic from "next/dynamic";
import { AppState, wrapper } from "../redux/store";
import { connect } from "react-redux";

const FloatActionButton = dynamic(() => import("../components/actionbtn"), { ssr: false });

// prettier-ignore
interface CustomAppProps extends AppProps { initialReduxState: AppState }

const CustomApp = ({ Component, pageProps, initialReduxState }: CustomAppProps) => (
  <main id="hh-space" data-theme={initialReduxState.theme.value}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/space.webmanifest" />
      <meta key="color-scheme" name="color-scheme" content={initialReduxState.theme.value} />
      <meta
        key="theme-color"
        name="theme-color"
        content={initialReduxState.theme.value === "dark" ? "#1E2022" : "#FFFFFF"}
      />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <FloatActionButton />
  </main>
);

const connectedApp = connect((state: AppState) => ({ initialReduxState: state }))(CustomApp);

export default wrapper.withRedux(connectedApp);
