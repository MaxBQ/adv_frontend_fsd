import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { FC } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitch />
      <div className={cls.links}>
        <AppLink className={cls.mainLink} theme={AppLinkTheme.PRIMARY} to={"/"}>
          main
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          about
        </AppLink>
      </div>
    </div>
  );
};
