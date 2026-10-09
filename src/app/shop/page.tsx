import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopPage from "@/components/Shop/ShopPage";
import { SHOP_ENABLED } from "@/config/features";

export const metadata: Metadata = { title: "Sklep" };

const ShopRoute = () => {
  if (!SHOP_ENABLED) notFound();

  return <ShopPage />;
};

export default ShopRoute;
