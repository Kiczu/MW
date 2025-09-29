"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/lib/theme";
import { CartProvider } from "@/providers/cart-context";
import "@fontsource-variable/inter";
import "@fontsource/cormorant-garamond/700.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <body>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </body>
  </html>
);
export default RootLayout;
