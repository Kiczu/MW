"use client";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductPage from "@/components/ProductPage";
import Footer from "@/components/Footer";
import { getProductById } from "@/lib/products.mock";

const ProductRoute = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const product = getProductById(Number(params.id));
  if (!product) return null;
  return (
    <>
      <Navbar />
      <ProductPage product={product} onBack={() => router.back()} />
      <Footer />
    </>
  );
};
export default ProductRoute;
