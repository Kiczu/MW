import { Box, Container, Grid, Typography } from "@mui/material";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const STEPS = [
  {
    title: "Glina",
    text: "Pracuję na kamionce – wytrzymałej masie, która dobrze znosi codzienne użytkowanie.",
  },
  {
    title: "Formowanie",
    text: "Korzystam ze wszystkich technik lepienia: z wałków, z płatów, z bryły gliny i w formach – np. do kubków czy choinek. Większość form robię sama.",
  },
  {
    title: "Suszenie i pierwszy wypał",
    text: "Praca schnie około pięciu dni. Potem trafia do pieca na wypał biskwitowy w 900°C, który utwardza glinę i przygotowuje ją do szkliwienia.",
  },
  {
    title: "Szkliwienie i zdobienie",
    text: "Najczęściej szkliwię – szkliwami Amaco, Botz i Mayco. Czasem sięgam też po angobę, odwzorowanie faktur (np. liści), malowanie albo sgraffito, czyli rycie wzorów.",
  },
  {
    title: "Drugi wypał",
    text: "Drugi wypał, już ze szkliwem, odbywa się w 1080°C albo w 1220°C. Później piec powoli stygnie przez kilkadziesiąt godzin, a jego otwarcie to zawsze chwila pełna emocji – nigdy do końca nie wiadomo, co z niego wyjdzie.",
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
        Od bryły gliny do gotowej pracy mijają około dwa tygodnie: kilka etapów
        i dwa wypały.
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
