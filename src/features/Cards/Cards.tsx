import styles from "./styles.module.css";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { Product } from "../../types/productTypes.ts";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  return response.json();
};

const Cards: FC = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className={styles.cards}>
      {data.map((card: Product) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
