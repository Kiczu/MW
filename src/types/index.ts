export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  tag?: string;
  description?: string;
  variants?: { id: string; name: string }[];
};
