"use client";
import { Drawer, Box, Typography, Divider, List, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CartRow from "./CartRow";
import { useCart } from "@/providers/cart-context";
import { pln } from "@/utils/money";

const CartDrawer = () => {
  const { isOpen, closeCart, items, inc, dec, remove, subtotal } = useCart();

  const goCheckout = () => {
    // TODO: fetch('/api/create-order', ...) redirect na payUrl
  };

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
        <IconButton onClick={closeCart} aria-label="Zamknij koszyk">
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
          <CartRow
            key={idx}
            it={it}
            idx={idx}
            inc={inc}
            dec={dec}
            remove={remove}
          />
        ))}
      </List>

      <Box sx={{ mt: "auto", p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Razem</Typography>
          <Typography fontWeight={700}>{pln(subtotal)}</Typography>
        </Box>
        <Button fullWidth size="large" variant="contained" onClick={goCheckout}>
          Przejdź do kasy
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
