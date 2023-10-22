import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useState, type FC, useCallback } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";

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
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        commodi consequatur eligendi impedit incidunt necessitatibus possimus
        quis saepe sunt totam.
      </Modal>
    </div>
  );
};
