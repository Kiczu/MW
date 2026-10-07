import { notFound } from "next/navigation";
import { Container } from "@mui/material";
import ProductPage from "@/components/ProductPage";
import { mapStoreToProductDetails, storeFetch } from "@/lib/api/woo";
import type { StoreProduct } from "@/types/shop";

type Params = { params: Promise<{ id: string }> };

const ProductRoute = async ({ params }: Params) => {
  const { id } = await params;
  const p = await storeFetch<StoreProduct>(`/products/${id}`).catch(() => null);
  if (!p) return notFound();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <ProductPage product={mapStoreToProductDetails(p)} />
    </Container>
  );
};

export default ProductRoute;
