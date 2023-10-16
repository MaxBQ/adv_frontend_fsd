import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { type RouteProps } from "react-router-dom";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "notFound",
}

const RoutePath: Record<AppRoutes, string> = {
  main: "/",
  about: "about",
  notFound: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  about: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  notFound: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
