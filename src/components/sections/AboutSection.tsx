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
            Kobieta na kole
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            To mała, domowa pracownia ceramiki. Większość prac powstaje na kole
            garncarskim, od bryły gliny aż po ostatni wypał, dlatego żadne dwa
            naczynia nie są identyczne.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
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
