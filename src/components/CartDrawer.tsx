"use client";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "@/providers/cart-context";

const CartDrawer = () => {
  const { isOpen, closeCart, items, inc, dec, remove, subtotal } = useCart();
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={closeCart}
      PaperProps={{ sx: { width: { xs: 360, sm: 420 } } }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Koszyk</Typography>
        <IconButton onClick={closeCart}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ p: 0 }}>
        {items.length === 0 && (
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            Koszyk jest pusty
          </Typography>
        )}
        {items.map((it, idx) => (
          <ListItem
            key={idx}
            secondaryAction={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton size="small" onClick={() => dec(idx)}>
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography>{it.qty}</Typography>
                <IconButton size="small" onClick={() => inc(idx)}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            }
          >
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                src={it.product.image}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${it.product.title}${
                it.variantId ? ` • ${it.variantId.toUpperCase()}` : ""
              }`}
              secondary={`${it.product.price} zł / szt.`}
            />
            <Button size="small" color="inherit" onClick={() => remove(idx)}>
              Usuń
            </Button>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: "auto", p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Razem</Typography>
          <Typography sx={{ fontWeight: 700 }}>
            {subtotal.toFixed(2)} zł
          </Typography>
        </Box>
        <Button fullWidth size="large" variant="contained" color="primary">
          Przejdź do kasy
        </Button>
      </Box>
    </Drawer>
  );
};
export default CartDrawer;
