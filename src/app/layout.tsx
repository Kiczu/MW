import { Container } from "@mui/material";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body>
        <Providers>
          <Navbar />
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
