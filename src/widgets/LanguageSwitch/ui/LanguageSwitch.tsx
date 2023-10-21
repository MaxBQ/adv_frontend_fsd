import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitch.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LanguageSwitchProps {
  className?: string;
  collapse?: boolean;
}

export const LanguageSwitch = ({
  className,
  collapse,
}: LanguageSwitchProps) => {
  const { t, i18n } = useTranslation();
  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={onToggle}
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LanguageSwitch, {}, [className])}
    >
      {collapse ? t("lang") : t("language")}
    </Button>
  );
};
