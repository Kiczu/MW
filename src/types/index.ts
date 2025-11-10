export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  tag?: string;
  description?: string;
  variants?: { id: string; name: string }[];
};

export type CartProduct = {
  id: number;
  title: string;
  price: number;
  image?: string;
};

export type CartItem = {
  product: CartProduct;
  qty: number;
  variantId?: string;
};