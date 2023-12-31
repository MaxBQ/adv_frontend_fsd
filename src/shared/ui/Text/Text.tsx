import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum ThemeText {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
}

export const Text = memo(function Text(props: TextProps) {
  const { className, text, title, theme = ThemeText.PRIMARY } = props;
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      <p className={cls.title}>{title}</p>
      <p className={cls.text}>{text}</p>
    </div>
  );
});
