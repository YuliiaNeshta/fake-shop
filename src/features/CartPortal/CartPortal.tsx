import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import Cart from "../Cart/Cart.tsx";
import { FC } from "react";
import classNames from "classnames";
import XMarkIcon from "../../assets/svg/x-mark.svg";

interface CartPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPortal: FC<CartPortalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const portalClass = classNames(styles.portalWrapper, {
    [styles.open]: isOpen,
  });

  return ReactDOM.createPortal(
    <div className={portalClass}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.cartContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <XMarkIcon />
        </button>
        <Cart />
      </div>
    </div>,
    document.body,
  );
};

export default CartPortal;
