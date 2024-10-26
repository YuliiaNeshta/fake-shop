import styles from "./styles.module.css";
import { FC, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { Product } from "../../types/productTypes.ts";
import { useProductStore } from "../../store/store.ts";
import { getProducts } from "../../services/getProducts.ts";

const Cards: FC = () => {
  const { products, setProducts } = useProductStore();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className={styles.cards}>
      {products.length === 0 ? (
        <div>No products find</div>
      ) : (
        products?.map((card: Product) => <Card key={card.id} card={card} />)
      )}
    </div>
  );
};

export default Cards;
