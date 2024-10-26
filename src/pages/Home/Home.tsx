import SearchInput from "../../components/ui/SearchInput";
import { useProductStore } from "../../store/store.ts";

import { useState } from "react";

import styles from "./styles.module.css";
import Button from "../../components/ui/Button";
import Cards from "../../features/Cards";
import CartPortal from "../../features/CartPortal";

const Home = () => {
  const cart = useProductStore((state) => state.cart);

  console.log(cart, "cart");

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <SearchInput />
        <Button text="Open Cart" onClick={toggleCart}></Button>
      </div>

      <Cards />

      <CartPortal isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default Home;
