import styles from "./styles.module.css";
import { FC } from "react";
import { useProductStore } from "../../store/store.ts";
import { ProductInCart } from "../../types/productTypes.ts";
import Button from "../../components/ui/Button";

interface CartItemProps {
  product: ProductInCart;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const increaseAmountInCart = useProductStore(
    (state) => state.increaseAmountInCart,
  );
  const decreaseAmountInCart = useProductStore(
    (state) => state.decreaseAmountInCart,
  );
  const removeFromCart = useProductStore((state) => state.removeFromCart);

  // TODO: add IconButton and svg

  return (
    <div key={product.id} className={styles.cartItem}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <div className={styles.itemInfo}>
        <p className={styles.productName}>{product.title}</p>
        <p>{product.price} $</p>
      </div>

      <div className={styles.cartActions}>
        <div className={styles.productsAmountActions}>
          <button
            className={styles.iconButton}
            onClick={() => decreaseAmountInCart(product.id)}
          >
            -
          </button>
          <span className={styles.amount}>{product.amount}</span>
          <button
            className={styles.iconButton}
            onClick={() => increaseAmountInCart(product.id)}
          >
            +
          </button>
        </div>
        <Button onClick={() => removeFromCart(product.id)} text="X" />
      </div>
    </div>
  );
};

export default CartItem;
