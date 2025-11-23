"use client";
import { PATHS } from "@/config/paths";
import { Box, Container, Typography, Button, Grid, Link } from "@mui/material";
import Image from "next/image";

const Hero = () => (
  <Grid container spacing={6} alignItems="center" mb={4}>
    <Grid
      size={{
        xs: 12,
        md: 8,
      }}
    >
      <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: 44, md: 64 } }}>
        Kobieta na kole
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Ręcznie tworzone naczynia z naturalnych materiałów. Minimalizm, ciepłe
        szkliwa, trwałość.
      </Typography>
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Button
          component={Link}
          href={PATHS.shop}
          variant="contained"
          color="primary"
          size="large"
        >
          Zobacz kolekcję
        </Button>

        <Button
          component={Link}
          href={PATHS.about}
          variant="outlined"
          color="primary"
          size="large"
        >
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
);
export default Hero;
