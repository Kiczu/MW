import { Box, Button, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import { mapStoreToLite, storeFetch } from "@/lib/api/woo";
import { InstagramFeed } from "@/components/Instagram";
import ProductGrid from "@/components/ProductGrid";
import type { StoreProduct } from "@/types/shop";

const HomePage = async () => {
  const list = await storeFetch<StoreProduct[]>(
    `/products?status=publish&per_page=12&page=1`
  );
  const products = list.map(mapStoreToLite);

  return (
    <>
      <Hero />
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="h2">Polecane</Typography>
        <Button variant="text" color="primary">
          Zobacz wszystkie
        </Button>
      </Box>
      <ProductGrid products={products} />
      <InstagramFeed title="Na Instagramie" />
    </>
  );
};
export default HomePage;
