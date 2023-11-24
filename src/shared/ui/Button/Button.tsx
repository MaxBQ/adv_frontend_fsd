import {
  type Additional,
  classNames,
  type Mode,
} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
  CLEAR_INVERTED = "clearInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

type ButtonProps = {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ThemeButton.OUTLINE,
    children,
    disabled,
    square,
    size = SizeButton.M,
    ...otherProps
  } = props;
  const additional: Additional = [className, cls[theme], cls[size]];
  const mods: Mode = { [cls.square]: square, [cls.disabled]: disabled };
  return (
    <button
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
