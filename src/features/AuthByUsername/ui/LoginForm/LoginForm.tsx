import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../../model/selector/getLoginState/getLoginState";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, ThemeText } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(function LoginForm({
  className,
}: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const { password, username, isLoading, error } = useSelector(getLoginState);
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onRequestLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [password, username, dispatch]);
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text text={t("Auth form")} />
      {!!error && <Text theme={ThemeText.ERROR} text={t(error)} />}
      <Input
        autofocus
        type="text"
        value={username}
        onChange={onChangeUsername}
        placeholder={t("Enter username")}
      />
      <Input
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder={t("Enter the password")}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        disabled={isLoading}
        onClick={onRequestLoginClick}
        className={cls.LoginBtn}
      >
        {t("Login")}
      </Button>
    </div>
  );
});
