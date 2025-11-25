"use client";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import type { UiProduct } from "@/types/shop";

const ProductsGrid = ({ products }: { products: UiProduct[] }) => {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
