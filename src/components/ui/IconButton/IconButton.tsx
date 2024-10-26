import styles from "./styles.module.css";
import { FC, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  variant?: "primary" | "outlined" | "danger";
}

const IconButton: FC<ButtonProps> = ({
  icon,
  isActive,
  onClick,
  variant = "primary",
}) => {
  const buttonClass = classNames(styles.iconButton, {
    [styles[`variant-${variant}`]]: variant,
    [styles.active]: isActive,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {icon}
    </button>
  );
};

export default IconButton;
