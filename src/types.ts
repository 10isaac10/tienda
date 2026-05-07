export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "footwear" | "apparel" | "accessories";
  imageUrl: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
