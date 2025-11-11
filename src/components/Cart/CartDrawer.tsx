"use client";
import { useState } from "react";
import { Drawer, Box, Typography, Divider, List, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CartRow from "./CartRow";
import { useCart } from "@/providers/CartContext";
import { pln } from "@/utils/money";
import { makeItemKey } from "@/lib/cart";

const CartDrawer = () => {
  const [loading, setLoading] = useState(false);
  const {
    isOpen,
    closeCart,
    items,
    inc,
    dec,
    remove,
    subtotal,
    toWooLineItems,
  } = useCart();

  const goCheckout = async () => {
    setLoading(true);
    console.log("lineItems:", toWooLineItems());
    const resp = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lineItems: toWooLineItems() }),
    });
    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`/api/checkout ${resp.status}: ${text.slice(0, 200)}`);
    }
    const data = await resp.json();
    if (!data?.url) throw new Error("Brak pola url w odpowiedzi API.");
    window.location.href = data.url;
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
        {items.map((it) => {
          const id = { productId: it.product.id, variantId: it.variantId };
          return (
            <CartRow
              key={makeItemKey(id)}
              it={it}
              onInc={() => inc(id)}
              onDec={() => dec(id)}
              onRemove={() => remove(id)}
            />
          );
        })}
      </List>
      <Box sx={{ mt: "auto", p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Razem</Typography>
          <Typography fontWeight={700}>{pln(subtotal)}</Typography>
        </Box>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={goCheckout}
          disabled={!items.length || loading}
        >
          {loading ? "Przekierowuję…" : "Przejdź do kasy"}
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
