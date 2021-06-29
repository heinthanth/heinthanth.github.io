import { render, hydrate } from "react-dom";
import HeinHein from "./js/app";

const mountpoint = document.querySelector("#__hh_app_");

if (mountpoint.hasChildNodes()) hydrate(<HeinHein />, mountpoint);
else render(<HeinHein />, mountpoint);
