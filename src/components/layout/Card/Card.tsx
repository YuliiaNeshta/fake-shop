import styles from "./styles.module.css";
import { FC } from "react";
import { Product } from "../../../types/productTypes.ts";
import { useProductStore } from "../../../store/store.ts";
import Button from "../../ui/Button";

interface CardProps {
  card: Product;
}

const Card: FC<CardProps> = ({ card }) => {
  //TODO: add to cart from icon button
  // 1. first click add to store/second click remove
  // 2. if already have this id in cart, just remove it
  // 3. add status to svg
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={card.image} alt={card.title} />
      <div className={styles.cardInfo}>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.description}>{card.description}</p>
        <div className={styles.cardFooter}>
          <p className={styles.cardPrice}>{card.price} $</p>
          {/*<IconButton onClick={() => addToCart(card)} icon={} />*/}
          <Button text="Add to cart" onClick={() => addToCart(card)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
