"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartContext";
import Image from "next/image";
import { PATHS } from "@/config/paths";
import { SHOP_ENABLED } from "@/config/features";

const NAV_LINKS = [
  { label: "Strona główna", href: PATHS.home },
  SHOP_ENABLED
    ? { label: "Sklep", href: PATHS.shop }
    : { label: "Prace", href: PATHS.works },
  { label: "O mnie", href: PATHS.about },
  { label: "Proces", href: PATHS.process },
  { label: "Kontakt", href: PATHS.contact },
];

// The logo PNG has transparent padding (the mark spans x 215–800 of 1024 px);
// crop it horizontally so the mark lines up with the content edge.
const LOGO_CROP_LEFT = 215 / 1024;
const LOGO_CROP_RIGHT = (1024 - 801) / 1024;

const Logo = ({ size }: { size: number }) => (
  <Box
    component={Link}
    href={PATHS.home}
    aria-label="Kobieta na kole — strona główna"
    sx={{
      display: "inline-flex",
      lineHeight: 0,
      overflow: "hidden",
      width: Math.round(size * (1 - LOGO_CROP_LEFT - LOGO_CROP_RIGHT)),
      flexShrink: 0,
    }}
  >
    <Image
      src="/assets/logo/knk-logo-bord.png"
      alt="Kobieta na kole"
      width={size}
      height={size}
      priority
      style={{
        marginLeft: -Math.round(size * LOGO_CROP_LEFT),
        maxWidth: "none",
      }}
    />
  </Box>
);

const Navbar = () => {
  const { totalQty, openCart } = useCart();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  // Navigate only after the drawer has closed: its scroll lock otherwise
  // cancels hash navigation on the same page (e.g. /#proces -> /#kontakt).
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);
  const navigateFromMenu = (e: React.MouseEvent, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setPendingHref(href);
    closeMenu();
  };
  const handleMenuExited = () => {
    if (pendingHref) router.push(pendingHref);
    setPendingHref(null);
  };

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
        <Logo size={110} />
        <Box sx={{ flexGrow: 1 }} />
        <Box
          component="nav"
          sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}
        >
          {NAV_LINKS.map((l) => (
            <Button key={l.href} color="inherit" component={Link} href={l.href}>
              {l.label}
            </Button>
          ))}
        </Box>
        {SHOP_ENABLED && (
          <IconButton color="inherit" aria-label="cart" onClick={openCart}>
            <Badge badgeContent={totalQty} color="primary">
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
        )}
        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          aria-label="Otwórz menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        id="mobile-menu"
        anchor="right"
        open={menuOpen}
        onClose={closeMenu}
        sx={{ display: { md: "none" } }}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              bgcolor: "rgba(245, 242, 235, 0.88)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "none",
            },
          },
          backdrop: { sx: { bgcolor: "transparent" } },
          transition: { onExited: handleMenuExited },
        }}
      >
        <Toolbar sx={{ gap: 2, bgcolor: "background.paper" }}>
          <Box
            sx={{ display: "flex" }}
            onClickCapture={(e) => navigateFromMenu(e, PATHS.home)}
          >
            <Logo size={110} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton edge="end" aria-label="Zamknij menu" onClick={closeMenu}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav" sx={{ py: 2 }}>
          {NAV_LINKS.map((l) => (
            <ListItemButton
              key={l.href}
              component={Link}
              href={l.href}
              onClick={(e: React.MouseEvent) => navigateFromMenu(e, l.href)}
              sx={{ px: 2, py: 1.5 }}
            >
              <ListItemText
                primary={l.label}
                slotProps={{
                  primary: { sx: { fontWeight: 600, fontSize: 22 } },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};
export default Navbar;
