"use client";
import { Container, Box, Grid, Button, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/products.mock";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const openProduct = (id: number) => router.push(`/product/${id}`);

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
        <Grid container spacing={3}>
          {PRODUCTS.map((p) => (
            <Grid
              key={p.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <ProductCard product={p} onOpen={() => openProduct(p.id)} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <AboutSection />
      <Footer />
    </>
  );
};
export default HomePage;
