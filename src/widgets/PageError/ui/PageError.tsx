import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const clickReload = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("Перезагрузите страницу")}</p>
      <button onClick={clickReload}>{t("reload")}</button>
    </div>
  );
};
