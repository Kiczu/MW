"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Button,
  Link,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { useCart } from "@/providers/CartContext";
import Image from "next/image";
import { PATHS } from "@/config/paths";

const Navbar = () => {
  const { totalQty, openCart } = useCart();
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
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
        <Link href={PATHS.home}>
          <Image
            src="/assets/logo/knk-logo-bord.png"
            alt="logo"
            width={110}
            height={110}
            priority
          />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button
            component={Link}
            href={PATHS.home}
            variant="text"
            color="inherit"
          >
            Strona główna
          </Button>
          <Button
            component={Link}
            href={PATHS.about}
            variant="text"
            color="inherit"
          >
            O mnie
          </Button>
          <Button
            component={Link}
            href={PATHS.shop}
            variant="text"
            color="inherit"
          >
            Sklep
          </Button>
          <Button
            component={Link}
            href={PATHS.contact}
            variant="text"
            color="inherit"
          >
            Kontakt
          </Button>
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
