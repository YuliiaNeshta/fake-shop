import styles from "./styles.module.css";
import CartItem from "../CartItem";
import { useProductStore } from "../../store/store.ts";
import Button from "../../components/ui/Button";
import { ProductInCart } from "../../types/productTypes.ts";

const Cart = () => {
  const cart = useProductStore((state) => state.cart);
  const totalPrice = useProductStore((state) => state.totalPrice);
  const cleanCart = useProductStore((state) => state.cleanCart);

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.deleteButton}>
        {cart.length > 0 && (
          <Button fullWidth onClick={() => cleanCart()} text="Delete All" />
        )}
      </div>
      <div className={styles.cartItems}>
        {cart.length > 0 ? (
          cart.map(
            (product: ProductInCart) =>
              product.amount > 0 && <CartItem product={product} />,
          )
        ) : (
          <p>Your shopping cart is empty :(</p>
        )}
      </div>
      {totalPrice > 0 && (
        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            <p>Total</p>
            <p>{totalPrice} $</p>
          </div>
          <Button
            fullWidth
            onClick={() => console.log(`Your Products: ${cart}`)}
            text="Buy"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
