import HomePage from "./pages/home";

const GlobalRoutes = [
    { name: "Home", url: "/", exact: true, component: HomePage },
    { name: "Creations", url: "/creations" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
];

export default GlobalRoutes;
