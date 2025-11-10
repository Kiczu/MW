"use client";
import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/cart-context";
import { CartProduct } from "@/types";

const ProductPage = ({ product }: { product: CartProduct }) => {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  return (
    <>
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
        onClick={() => router.back()}
      >
        Wróć
      </Button>
      <Grid container spacing={6}>
        <Grid size={{ xs: 1, md: 6 }}>
          <Box
            sx={{
              height: 520,
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" fontWeight={700} sx={{ mb: 3 }}>
            {product.title}
          </Typography>
          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
