"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MUILink,
} from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      py: 6,
      borderTop: "1px solid",
      borderColor: "divider",
      backgroundColor: "#F7F4EE",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            CERAMIKA
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
            Współczesna ceramika użytkowa inspirowana naturą i tradycją
            rzemiosła.
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 6,
            md: 3,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Sklep
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            <MUILink underline="hover" href="#">
              Kolekcje
            </MUILink>
            <MUILink underline="hover" href="#">
              Nowości
            </MUILink>
            <MUILink underline="hover" href="#">
              Kontakt
            </MUILink>
          </Box>
        </Grid>
        <Grid
          size={{
            xs: 6,
            md: 3,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Informacje
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            <MUILink underline="hover" href="#">
              Regulamin
            </MUILink>
            <MUILink underline="hover" href="#">
              Prywatność
            </MUILink>
            <MUILink underline="hover" href="#">
              Zwroty
            </MUILink>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Typography variant="caption" color="text.secondary">
        © {new Date().getFullYear()} Ceramika. Wszelkie prawa zastrzeżone.
      </Typography>
    </Container>
  </Box>
);
export default Footer;
