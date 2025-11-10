import { Container, Box, Button, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { mapStoreToLite, storeFetch, StoreProduct } from "@/lib/api/woo";
import { InstagramFeed } from "@/components/Instagram";
import ProductGrid from "@/components/ProductGrid";

const HomePage = async () => {
  const list = await storeFetch<StoreProduct[]>(
    `/products?status=publish&per_page=12&page=1`
  );
  const products = list.map(mapStoreToLite);

  return (
    <>
      <Navbar />
      <Hero />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
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
      </Container>
      <Footer />
    </>
  );
};
export default HomePage;
