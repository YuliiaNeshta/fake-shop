import styles from "./styles.module.css";
import { FC } from "react";
import classNames from "classnames";

interface ButtonProps {
  // TODO: add correct type
  icon: SVGAElement;
  onClick?: () => void;
  isActive?: boolean;
}

const IconButton: FC<ButtonProps> = ({ icon, isActive, onClick }) => {
  const buttonClass = classNames(styles.iconButton, {
    [styles.active]: isActive,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {icon}
    </button>
  );
};

export default IconButton;
