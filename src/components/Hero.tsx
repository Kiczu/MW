"use client";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const Hero = () => (
  <Box
    sx={{
      pt: { xs: 8, md: 12 },
      pb: { xs: 8, md: 12 },
      background: `radial-gradient(60% 120% at 0% 0%, rgba(196,107,69,0.12) 0%, rgba(196,107,69,0.0) 60%),
radial-gradient(40% 80% at 100% 20%, rgba(169,161,122,0.15) 0%, rgba(169,161,122,0.0) 70%)`,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="secondary.main">
            Nowa kolekcja
          </Typography>
          <Typography
            variant="h1"
            sx={{ mt: 1, mb: 2, fontSize: { xs: 44, md: 64 } }}
          >
            Ceramika na nowe czasy
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 520, color: "text.secondary" }}
          >
            Ręcznie tworzone naczynia z naturalnych materiałów. Minimalizm,
            ciepłe szkliwa, trwałość.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" size="large">
              Zobacz kolekcję
            </Button>
            <Button variant="outlined" color="primary" size="large">
              O nas
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 420,
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default Hero;
