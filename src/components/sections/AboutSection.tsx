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
          <ImagePlaceholder label="Zdjęcie: ja przy kole garncarskim / w pracowni" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="overline" color="secondary.main">
            O mnie
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            [Twoje imię], ceramiczka
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            [Jak zaczęła się Twoja przygoda z gliną? Kiedy pierwszy raz usiadłaś
            przy kole i co sprawiło, że zostałaś?]
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            [Co jest dla Ciebie ważne w tym, co tworzysz — forma, szkliwa,
            użytkowość, materiały? Gdzie jest Twoja pracownia?]
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default AboutSection;
