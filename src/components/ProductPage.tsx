"use client";
import {
  Container,
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
import { Product } from "@/types";
import { useCart } from "@/providers/cart-context";
import { useState } from "react";

const ProductPage = ({
  product,
  onBack,
}: {
  product: Product;
  onBack: () => void;
}) => {
  const [qty, setQty] = useState(1);
  const [variantId, setVariantId] = useState<string | undefined>(
    product.variants?.[0]?.id
  );
  const { addToCart } = useCart();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Button startIcon={<ArrowBackIcon />} sx={{ mb: 2 }} onClick={onBack}>
        Wróć
      </Button>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {product.title}
          </Typography>
          <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
            {product.price} zł
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {product.description || "Opis produktu"}
          </Typography>

          {product.variants && (
            <Box sx={{ mb: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
              {product.variants.map((v) => (
                <Button
                  key={v.id}
                  variant={variantId === v.id ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setVariantId(v.id)}
                >
                  {v.name}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <IconButton onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <RemoveIcon />
            </IconButton>
            <TextField
              size="small"
              value={qty}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                style: { width: 48, textAlign: "center" },
              }}
              onChange={(e) => setQty(Number(e.target.value) || 1)}
            />
            <IconButton onClick={() => setQty((q) => q + 1)}>
              <AddIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => addToCart(product, qty, variantId)}
            >
              Dodaj do koszyka
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Kup teraz
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProductPage;
