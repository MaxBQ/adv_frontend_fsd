import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Suspense, useEffect } from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  useEffect(() => {
    return () => {
      onClose();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.LoginModal, {}, [className])}
      laze
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
