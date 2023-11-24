import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {
  useRef,
  type InputHTMLAttributes,
  useState,
  useEffect,
  memo,
} from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    type = "text",
    onChange,
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

  useEffect(() => {
    if (autofocus) {
      ref?.current?.focus();
      setIsFocus(true);
    }
    return () => {
      ref.current = null;
      setIsFocus(false);
      setCaretPosition(0);
    };
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setCaretPosition((e?.target as HTMLInputElement).selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          className={cls.input}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocus && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
