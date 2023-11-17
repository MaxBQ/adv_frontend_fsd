import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, ThemeText } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  type ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getLoginError } from "../../model/selector/getLoginError/getLoginError";
import { getLoginPassword } from "../../model/selector/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selector/getLoginUsername/getLoginUsername";
import { getLoginIsLoading } from "../../model/selector/getLoginIsLoading/getLoginIsLoading";
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};
const LoginForm = memo(function LoginForm({
  className,
  onSuccess,
}: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );
  const onRequestLoginClick = useCallback(() => {
    const click = async () => {
      const resolve = await dispatch(loginByUsername({ password, username }));
      if (resolve.meta.requestStatus === "fulfilled") {
        onSuccess();
      }
    };
    click();
  }, [onSuccess, password, username, dispatch]);
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
