import styles from "./styles.module.css";
import { FC, useEffect, useState } from "react";
import { Product } from "../../types/productTypes.ts";
import { useProductStore } from "../../store/store.ts";
import CartIcon from "../../assets/svg/shoping-cart.svg";
import AddedCartIcon from "../../assets/svg/shoping-cart-check.svg";
import IconButton from "../../components/ui/IconButton/index.ts";

interface CardProps {
  card: Product;
}

const Card: FC<CardProps> = ({ card }) => {
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);

  const addToCart = useProductStore((state) => state.addToCart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  const cart = useProductStore((state) => state.cart);

  const isProductInCart = () => {
    return cart.some((product) => product.id === card.id);
  };

  const handleAddingToCart = (card: Product) => {
    const isInCart = cart.some((product) => product.id === card.id);

    if (isInCart) {
      removeFromCart(card.id);
    } else {
      addToCart(card);
    }
  };

  useEffect(() => {
    setIsAlreadyInCart(isProductInCart);
  }, [cart, card.id]);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={card.image} alt={card.title} />
      <div className={styles.cardInfo}>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.description}>{card.description}</p>
        <div className={styles.cardFooter}>
          <p className={styles.cardPrice}>{card.price} $</p>
          <IconButton
            onClick={() => {
              handleAddingToCart(card);
            }}
            isActive={isAlreadyInCart}
            icon={isAlreadyInCart ? <AddedCartIcon /> : <CartIcon />}
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
