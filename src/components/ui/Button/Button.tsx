import styles from "./styles.module.css";
import { FC } from "react";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  onClick: () => void;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ text, onClick, fullWidth }) => {
  const buttonClass = classNames(styles.button, {
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
