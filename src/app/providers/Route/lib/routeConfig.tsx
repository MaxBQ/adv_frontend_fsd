import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { type RouteProps } from "react-router-dom";
import { ProfilePage } from "pages/ProfilePage";
import {
  type AppRoutes,
  RoutePath,
} from "shared/config/route/model/routesModel";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  about: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  profile: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  notFound: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
