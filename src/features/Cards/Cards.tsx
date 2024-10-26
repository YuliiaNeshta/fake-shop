import styles from "./styles.module.css";
import { FC, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { Product } from "../../types/productTypes.ts";
import { useProductStore } from "../../store/store.ts";
import { getProducts } from "../../services/getProducts.ts";
import SpinnerIcon from "../../assets/svg/spinner.svg";

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
    return (
      <div className={styles.spinner}>
        <SpinnerIcon />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className={styles.cards}>
      {products.length === 0 ? (
        <div>No products found</div>
      ) : (
        products?.map((card: Product) => <Card key={card.id} card={card} />)
      )}
    </div>
  );
};

export default Cards;
