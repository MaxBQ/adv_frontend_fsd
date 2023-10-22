import { classNames } from "shared/lib/classNames/classNames";
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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, square, size, ...otherProps } = props;
  const additional = [cls[theme], cls[size]];
  return (
    <button
      className={classNames(cls.Button, { [cls.square]: square }, [
        className,
        ...additional,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
