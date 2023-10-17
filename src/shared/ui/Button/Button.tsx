import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

type ButtonProps = {
  className?: string;
  theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
