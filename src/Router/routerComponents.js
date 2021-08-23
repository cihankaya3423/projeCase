import { lazy } from "react";

const RouterPublic = lazy(() => import("./routerPublic"));

const Home = lazy(() => import("../Components/home"));
const LinkCreate = lazy(() => import("../Components/linkCreate"));

export { RouterPublic, Home, LinkCreate };
