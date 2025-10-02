"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { useCart } from "@/providers/cart-context";
import Image from "next/image";

const Navbar = () => {
  const { totalQty, openCart } = useCart();
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <IconButton
          edge="start"
          color="inherit"
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Image
          src="/assets/logo/knk-logo-bord.png"
          alt="logo"
          width={110}
          height={110}
          priority
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button color="inherit">Kolekcje</Button>
          <Button color="inherit">O mnie</Button>
          <Button color="inherit">Kontakt</Button>
        </Box>
        <IconButton color="inherit" aria-label="cart" onClick={openCart}>
          <Badge badgeContent={totalQty} color="primary">
            <ShoppingBagIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
