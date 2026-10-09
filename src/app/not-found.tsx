import type { Metadata } from "next";
import { Box, Button, Container, Typography } from "@mui/material";
import { PATHS } from "@/config/paths";

export const metadata: Metadata = { title: "Nie znaleziono strony" };

const NotFound = () => (
  <Container maxWidth="md" sx={{ py: { xs: 10, md: 16 }, textAlign: "center" }}>
    <Typography variant="overline" color="secondary.main">
      Błąd 404
    </Typography>
    <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
      Nie ma takiej strony
    </Typography>
    <Typography
      sx={{ color: "text.secondary", mb: 4, maxWidth: 560, mx: "auto" }}
    >
      Możliwe, że link jest nieaktualny albo ta praca nie jest już pokazywana.
    </Typography>
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Button variant="contained" size="large" href={PATHS.home}>
        Strona główna
      </Button>
      <Button variant="outlined" size="large" href={PATHS.works}>
        Zobacz prace
      </Button>
    </Box>
  </Container>
);

export default NotFound;
