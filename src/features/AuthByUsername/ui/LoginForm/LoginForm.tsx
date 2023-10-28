import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autofocus type="text" placeholder={t("Enter username")} />
      <Input type="password" placeholder={t("Enter the password")} />
      <Button className={cls.LoginBtn}>{t("Login")}</Button>
    </div>
  );
};
