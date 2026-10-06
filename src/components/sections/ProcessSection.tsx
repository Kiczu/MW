import { Box, Container, Grid, Typography } from "@mui/material";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const STEPS = [
  {
    title: "Glina",
    text: "[Z jakiej masy pracujesz i skąd ją bierzesz.]",
  },
  {
    title: "Toczenie",
    text: "[Formowanie na kole, toczenie stopki, doklejanie uszek.]",
  },
  {
    title: "Suszenie i pierwszy wypał",
    text: "[Ile trwa suszenie, wypał biskwitowy — temperatura.]",
  },
  {
    title: "Szkliwienie",
    text: "[Jakie szkliwa, czy własne receptury, jak je nakładasz.]",
  },
  {
    title: "Drugi wypał",
    text: "[Wypał na ostro — temperatura, dlaczego każda sztuka jest inna.]",
  },
];

const ProcessSection = () => (
  <Box id="proces" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 96 }}>
    <Container maxWidth="lg">
      <Typography variant="overline" color="secondary.main">
        Proces
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 1 }}>
        Od gliny do wypału
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 5, maxWidth: 640 }}
      >
        [Jedno–dwa zdania o tym, ile czasu i etapów stoi za jednym naczyniem.]
      </Typography>
      <Grid container spacing={3}>
        {STEPS.map((s, i) => (
          <Grid key={s.title} size={{ xs: 12, sm: 6, md: 12 / 5 }}>
            <ImagePlaceholder
              label={`Zdjęcie: ${s.title.toLowerCase()}`}
              height={180}
            />
            <Typography
              variant="overline"
              sx={{ display: "block", mt: 2, color: "primary.main" }}
            >
              {String(i + 1).padStart(2, "0")}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {s.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {s.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
export default ProcessSection;
