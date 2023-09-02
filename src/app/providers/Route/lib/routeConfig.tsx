import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

const RoutePath: Record<AppRoutes, string> = {
  main: "/",
  about: "about",
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
};
