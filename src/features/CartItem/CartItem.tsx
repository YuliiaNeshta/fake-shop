import styles from "./styles.module.css";
import { FC } from "react";
import { useProductStore } from "../../store/store.ts";
import { ProductInCart } from "../../types/productTypes.ts";
import TrashIcon from "../../assets/svg/trash.svg";
import MinusIcon from "../../assets/svg/minus.svg";
import PlusIcon from "../../assets/svg/plus.svg";
import IconButton from "../../components/ui/IconButton";

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

  return (
    <div key={product.id} className={styles.cartItem}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <div className={styles.itemInfo}>
        <p className={styles.productName}>{product.title}</p>
        <p>{product.price} $</p>
      </div>

      <div className={styles.cartActions}>
        <div className={styles.productsAmountActions}>
          <IconButton
            onClick={() => decreaseAmountInCart(product.id)}
            icon={<MinusIcon />}
            variant="outlined"
          />
          <span className={styles.amount}>{product.amount}</span>
          <IconButton
            icon={<PlusIcon />}
            variant="outlined"
            onClick={() => increaseAmountInCart(product.id)}
          />
        </div>
        <IconButton
          variant="danger"
          onClick={() => removeFromCart(product.id)}
          icon={<TrashIcon />}
        />
      </div>
    </div>
  );
};

export default CartItem;
