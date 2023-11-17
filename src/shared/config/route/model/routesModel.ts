export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "notFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  main: "/",
  about: "about",
  profile: "profile",
  notFound: "*",
};
