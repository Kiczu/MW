import { Box, Container, Grid, Typography } from "@mui/material";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const STEPS = [
  {
    title: "Glina",
    text: "Pracuję na gotowych masach ceramicznych, najczęściej na porcelanie. Każda zachowuje się trochę inaczej w dłoniach i w piecu.",
  },
  {
    title: "Formowanie",
    text: "Każdą pracę kształtuję ręcznie. Po podsuszeniu wygładzam ją i dopracowuję detale.",
  },
  {
    title: "Suszenie i pierwszy wypał",
    text: "Prace schną powoli, żeby nie popękały. Pierwszy, biskwitowy wypał utwardza glinę i przygotowuje ją do szkliwienia.",
  },
  {
    title: "Szkliwienie",
    text: "Używam gotowych szkliw z atestem do kontaktu z żywnością, więc z naczyń można bezpiecznie jeść i pić.",
  },
  {
    title: "Drugi wypał",
    text: "Wypał na ostro, w temperaturze ok. 1200–1300°C, stapia szkliwo. Dopiero po otwarciu pieca widać efekt i każda sztuka wychodzi trochę inna.",
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
        Zanim naczynie trafi na stół, przechodzi przez kilka etapów i dwa
        wypały.
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
