export type Product = {
  id: number;
  title: string;
  price: number; // w zł (dla prostoty makiet)
  image: string;
  tag?: string;
  description?: string;
  variants?: { id: string; name: string }[];
};
