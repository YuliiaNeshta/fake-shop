import SearchInput from "../../components/ui/SearchInput";
import { useProductStore } from "../../store/store.ts";
import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../../components/ui/Button";
import Cards from "../../features/Cards";
import CartPortal from "../../features/CartPortal";
import { Product } from "../../types/productTypes.ts";
import { useGetCachedQueryData } from "../../utils/utils.ts";

const Home = () => {
  const products = useProductStore((state) => state.products);

  const setProducts = useProductStore((state) => state.setProducts);
  const originalProducts = useGetCachedQueryData("products") as Product[];

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleSearchResult = (searchValue: string) => {
    const finalSearchValue = searchValue.trim().toLowerCase();

    if (!finalSearchValue.length) {
      setProducts(originalProducts);
      return;
    }

    const filteredProducts = products.filter((product: Product) =>
      product.title.toLowerCase().includes(finalSearchValue),
    );

    setProducts(filteredProducts);
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <SearchInput onChangeCallback={handleSearchResult} />
        <Button text="Open Cart" onClick={toggleCart} />
      </div>
      <Cards />
      <CartPortal isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default Home;
