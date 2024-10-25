export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface ProductInCart extends Product {
  amount: number;
}
