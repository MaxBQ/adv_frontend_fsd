import type React from "react";
import { RoutePath } from "shared/config/route/model/routesModel";
import MainIcon from "shared/assets/icons/Home.svg";
import AboutIcon from "shared/assets/icons/About.svg";
import ProfileIcon from "shared/assets/icons/Profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "Main",
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: "About",
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: "Profile",
    Icon: ProfileIcon,
  },
];
