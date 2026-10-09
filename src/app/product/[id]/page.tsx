import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@mui/material";
import ProductPage from "@/components/ProductPage";
import { mapStoreToProductDetails, storeFetch } from "@/lib/api/woo";
import type { StoreProduct } from "@/types/shop";
import { SITE } from "@/config/site";

type Params = { params: Promise<{ id: string }> };

const getProduct = cache((id: string) =>
  storeFetch<StoreProduct>(`/products/${id}`).catch(() => null),
);

const toPlainText = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const { id } = await params;
  const p = await getProduct(id);
  if (!p) return {};

  const description = toPlainText(p.short_description || p.description);
  const image = p.images?.[0];

  return {
    title: p.name,
    description: description ? description.slice(0, 160) : undefined,
    openGraph: {
      type: "website",
      locale: "pl_PL",
      siteName: SITE.name,
      title: p.name,
      description: description ? description.slice(0, 160) : undefined,
      images: image
        ? [{ url: image.src, alt: image.alt || p.name }]
        : undefined,
    },
  };
};

const ProductRoute = async ({ params }: Params) => {
  const { id } = await params;
  const p = await getProduct(id);
  if (!p) return notFound();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <ProductPage product={mapStoreToProductDetails(p)} />
    </Container>
  );
};

export default ProductRoute;
