export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: Rating;
}

export interface ProductInCart extends Product {
  amount: number;
}
