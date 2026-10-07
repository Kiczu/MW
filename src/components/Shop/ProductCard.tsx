"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "@/providers/CartContext";
import { pln } from "@/utils/money";
import type { UiProduct } from "@/types/shop";
import { PATHS } from "@/config/paths";

const ProductCard = ({ product }: { product: UiProduct }) => {
  const { addToCart } = useCart();

  return (
    <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
      <Box sx={{ position: "relative" }}>
        <CardActionArea LinkComponent={Link} href={PATHS.product(product.id)}>
          <CardMedia sx={{ position: "relative", height: 220 }}>
            <Image
              src={product.image || "/placeholder.png"}
              alt={product.title}
              fill
              sizes="(max-width: 600px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </CardMedia>
        </CardActionArea>
        <Tooltip title="Dodaj do koszyka">
          <IconButton
            size="small"
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
              })
            }
            sx={{
              position: "absolute",
              right: 8,
              bottom: 8,
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "background.default" },
            }}
          >
            <AddShoppingCartIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <CardContent sx={{ display: "grid", gap: 0.5 }}>
        <Typography fontWeight={600} noWrap title={product.title}>
          <Link
            href={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {product.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pln(product.price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
