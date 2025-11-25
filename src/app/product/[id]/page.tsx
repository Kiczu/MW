import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { storeFetch } from "@/lib/api/woo";
import type { StoreProduct } from "@/types/shop";

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

  return <ProductPage product={product} />;
};

export default ProductRoute;
