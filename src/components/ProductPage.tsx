"use client";
import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartContext";
import { CartProduct } from "@/types/cart";
import type { ProductDetails } from "@/types/shop";
import ProductGallery from "@/components/Product/ProductGallery";
import { PATHS } from "@/config/paths";
import { SHOP_ENABLED } from "@/config/features";

const ProductPage = ({ product }: { product: ProductDetails }) => (
  <>
    <Button
      component={Link}
      href={PATHS.works}
      startIcon={<ArrowBackIcon />}
      sx={{ mb: 3 }}
    >
      Wszystkie prace
    </Button>
    <Grid container spacing={{ xs: 4, md: 8 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ProductGallery images={product.images} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ position: { md: "sticky" }, top: { md: 128 } }}>
          {product.categories.length > 0 && (
            <Typography variant="overline" color="secondary.main">
              {product.categories.join(" · ")}
            </Typography>
          )}
          <Typography variant="h3" component="h1" sx={{ mt: 0.5, mb: 3 }}>
            {product.title}
          </Typography>

          {SHOP_ENABLED && (
            <ShopControls
              product={{
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
              }}
            />
          )}

          {product.descriptionHtml && (
            <Box
              sx={{
                color: "text.secondary",
                typography: "body1",
                "& p": { mt: 0, mb: 2 },
                "& p:last-child": { mb: 0 },
              }}
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          )}

          {product.attributes.length > 0 && (
            <>
              <Divider sx={{ my: 3 }} />
              <Box
                component="dl"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  columnGap: 3,
                  rowGap: 1,
                  m: 0,
                }}
              >
                {product.attributes.map((a) => (
                  <Box key={a.name} sx={{ display: "contents" }}>
                    <Typography component="dt" variant="body2" fontWeight={600}>
                      {a.name}
                    </Typography>
                    <Typography
                      component="dd"
                      variant="body2"
                      color="text.secondary"
                      sx={{ m: 0 }}
                    >
                      {a.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  </>
);

const ShopControls = ({ product }: { product: CartProduct }) => {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {new Intl.NumberFormat("pl-PL", {
          style: "currency",
          currency: "PLN",
        }).format(product.price)}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <IconButton onClick={() => setQty((q) => Math.max(1, q - 1))}>
          <RemoveIcon />
        </IconButton>
        <TextField
          size="small"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value) || 1)}
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            style: { width: 48, textAlign: "center" },
          }}
        />
        <IconButton onClick={() => setQty((q) => q + 1)}>
          <AddIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => addToCart(product, qty)}
        >
          Dodaj do koszyka
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            addToCart(product, qty);
            router.push("/");
          }}
        >
          Kup teraz
        </Button>
      </Box>
    </Box>
  );
};

export default ProductPage;
