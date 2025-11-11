"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Divider,
  CardActions,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartContext";
import { CartProduct } from "@/types/cart";

type Props = { products: CartProduct[] };

const ProductGrid = ({ products }: Props) => {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <Grid container spacing={3}>
      {products.map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card>
            {p.image && (
              <CardMedia
                component="img"
                height={180}
                image={p.image}
                alt={p.title}
              />
            )}
            <CardContent>
              <Typography fontWeight={600}>{p.title}</Typography>
              <Typography color="primary.main" sx={{ mb: 1, fontWeight: 600 }}>
                {new Intl.NumberFormat("pl-PL", {
                  style: "currency",
                  currency: "PLN",
                }).format(p.price)}
              </Typography>
              <Divider />
            </CardContent>
            <CardActions>
              <Button
                sx={{ mr: 1 }}
                variant="outlined"
                onClick={() => router.push(`/product/${p.id}`)}
              >
                Szczegóły
              </Button>
              <Button
                variant="contained"
                onClick={() =>
                  addToCart(
                    {
                      id: p.id,
                      title: p.title,
                      image: p.image,
                      price: p.price,
                    },
                    1
                  )
                }
              >
                Do koszyka
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
