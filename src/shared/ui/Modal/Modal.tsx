import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}
const ANIMATION_DELAY = 300;
export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;
  const [closed, setClosed] = useState<boolean>(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const closeHandler = useCallback(() => {
    if (onClose) {
      setClosed(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setClosed(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);
  return (
    <Portal wrapperId="wrap-modal">
      <div
        className={classNames(
          cls.Modal,
          { [cls.opened]: isOpen, [cls.closed]: closed },
          [className]
        )}
      >
        <div className={cls.substrate} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
