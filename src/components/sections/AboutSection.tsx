import { Box, Container, Grid, Typography } from "@mui/material";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const AboutSection = () => (
  <Box
    id="o-mnie"
    sx={{
      py: { xs: 8, md: 12 },
      background: "#FFF",
      borderTop: "1px solid",
      borderColor: "divider",
      scrollMarginTop: 96,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <ImagePlaceholder label="Zdjęcie: praca w pracowni" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="overline" color="secondary.main">
            O mnie
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Kobieta na kole
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            To mała, domowa pracownia ceramiki. Przygoda z gliną zaczęła się
            kilka lat temu od zajęć garncarskich i tak już zostało.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Każdą pracę formuję ręcznie, dlatego żadne dwie nie są identyczne.
            Stawiam na proste formy i rzeczy do codziennego użytku, a nie tylko
            do stania na półce. Ceramiki wciąż się uczę i każdy wypał czegoś
            mnie uczy.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default AboutSection;
