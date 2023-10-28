import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useState, type FC, useCallback } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Login")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
    </div>
  );
};
