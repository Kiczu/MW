import { Box, Button, Container, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import { mapStoreToLite, storeFetch } from "@/lib/api/woo";
import { InstagramFeed } from "@/components/instagram";
import ProductGrid from "@/components/ProductGrid";
import type { StoreProduct } from "@/types/shop";
import { PATHS } from "@/config/paths";
import { SHOP_ENABLED } from "@/config/features";

const HomePage = async () => {
  const list = await storeFetch<StoreProduct[]>(
    `/products?status=publish&per_page=12&page=1`,
  );
  const products = list.map(mapStoreToLite);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Hero />
      <Box
        id="prace"
        sx={{
          scrollMarginTop: 96,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="h2">
          {SHOP_ENABLED ? "Polecane" : "Moje prace"}
        </Typography>
        {SHOP_ENABLED && (
          <Button variant="text" color="primary" href={PATHS.shop}>
            Zobacz wszystkie
          </Button>
        )}
      </Box>
      <ProductGrid products={products} />
      <InstagramFeed title="Na Instagramie" />
    </Container>
  );
};
export default HomePage;
