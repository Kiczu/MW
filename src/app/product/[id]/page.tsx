import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Box, Typography } from "@mui/material";
import ProductPage from "@/components/ProductPage";
import { storeFetch, type StoreProduct } from "@/lib/api/woo";

type Params = { params: Promise<{ id: string }> };

const toLite = (p: StoreProduct) => {
  const minor = Number(p.prices.price ?? "0");
  const unit = p.prices.currency_minor_unit ?? 2;
  return {
    id: p.id,
    title: p.name,
    price: minor / 10 ** unit,
    image: p.images?.[0]?.src,
  };
};

const ProductRoute = async ({ params }: Params) => {
  const { id } = await params;
  const p = await storeFetch<StoreProduct>(`/products/${id}`).catch(() => null);
  if (!p) return notFound();
  const product = toLite(p);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <ProductPage product={product} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductRoute;
