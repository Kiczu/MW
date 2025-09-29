"use client";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import { Product } from "@/types";

const ProductCard = ({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) => (
  <Card sx={{ cursor: "pointer" }} onClick={onOpen}>
    <CardMedia
      component="img"
      height="220"
      image={product.image}
      alt={product.title}
    />
    <CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 0.5,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {product.title}
        </Typography>
        {product.tag && (
          <Chip size="small" label={product.tag} color="secondary" />
        )}
      </Box>
      <Typography variant="body2" color="text.secondary">
        Wypał w 1240°C, szkliwo satynowe
      </Typography>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: "space-between", px: 2, py: 1.5 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {product.price} zł
      </Typography>
      <Button variant="contained" color="primary">
        Szczegóły
      </Button>
    </CardActions>
  </Card>
);
export default ProductCard;
