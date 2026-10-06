import { notFound } from "next/navigation";
import ShopPage from "@/components/Shop/ShopPage";
import { SHOP_ENABLED } from "@/config/features";

const ShopRoute = () => {
  if (!SHOP_ENABLED) notFound();

  return <ShopPage />;
};

export default ShopRoute;
