"use client";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

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
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Typography
            variant="h1"
            sx={{ mt: 1, mb: 2, fontSize: { xs: 44, md: 64 } }}
          >
            Kobieta na kole
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Ręcznie tworzone naczynia z naturalnych materiałów. Minimalizm,
            ciepłe szkliwa, trwałość.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" size="large">
              Zobacz kolekcję
            </Button>
            <Button variant="outlined" color="primary" size="large">
              O mnie
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 420,
            aspectRatio: "1 / 1",
            mx: { xs: "auto", md: 0 },
            borderLeft: { md: "1px solid" },
            borderColor: { md: "divider" },
          }}
        >
          <Image
            src="/assets/hero/hero-image.png"
            alt="Koło garncarskie"
            fill
            priority
            style={{ objectFit: "contain" }}
            sizes="(min-width: 1200px) 420px, (min-width: 900px) 33vw, 80vw"
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default Hero;
