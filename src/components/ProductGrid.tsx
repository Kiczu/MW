"use client";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/providers/CartContext";
import type { UiProduct } from "@/types/shop";
import { PATHS } from "@/config/paths";
import { SHOP_ENABLED } from "@/config/features";
import { pln } from "@/utils/money";

const WorkCard = ({ product }: { product: UiProduct }) => {
  const { addToCart } = useCart();

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component={Link}
        href={PATHS.product(product.id)}
        sx={{
          display: "block",
          color: "inherit",
          textDecoration: "none",
          "&:hover .work-hover, &:focus-visible .work-hover": { opacity: 1 },
          "&:hover .work-image, &:focus-visible .work-image": {
            transform: "scale(1.03)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            aspectRatio: "4 / 5",
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "background.paper",
          }}
        >
          {product.image && (
            <Image
              className="work-image"
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 900px) 25vw, 50vw"
              style={{ objectFit: "cover", transition: "transform .5s ease" }}
            />
          )}
          {product.hoverImage && (
            <Image
              className="work-hover"
              src={product.hoverImage}
              alt=""
              fill
              sizes="(min-width: 900px) 25vw, 50vw"
              style={{
                objectFit: "cover",
                opacity: 0,
                transition: "opacity .4s ease",
              }}
            />
          )}
        </Box>
        <Box sx={{ mt: 1.5 }}>
          {product.category && (
            <Typography
              variant="caption"
              color="secondary.main"
              sx={{ textTransform: "uppercase", letterSpacing: 1 }}
            >
              {product.category}
            </Typography>
          )}
          <Typography fontWeight={600}>{product.title}</Typography>
          {SHOP_ENABLED && (
            <Typography variant="body2" color="text.secondary">
              {pln(product.price)}
            </Typography>
          )}
        </Box>
      </Box>
      {SHOP_ENABLED && (
        <Tooltip title="Dodaj do koszyka">
          <IconButton
            size="small"
            aria-label={`Dodaj do koszyka: ${product.title}`}
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
              top: 8,
              right: 8,
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "background.default" },
            }}
          >
            <AddShoppingCartIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

const ProductGrid = ({ products }: { products: UiProduct[] }) => (
  <Grid container spacing={{ xs: 2, md: 3 }} rowSpacing={{ xs: 4, md: 5 }}>
    {products.map((p) => (
      <Grid key={p.id} size={{ xs: 6, md: 3 }}>
        <WorkCard product={p} />
      </Grid>
    ))}
  </Grid>
);

export default ProductGrid;
