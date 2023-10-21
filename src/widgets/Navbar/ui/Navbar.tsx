import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { type FC } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </div>
  );
};
