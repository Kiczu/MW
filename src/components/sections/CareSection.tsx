"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = [
  {
    q: "Czy naczynia można myć w zmywarce?",
    a: "Najbezpieczniej myć ręcznie, ciepłą wodą z łagodnym płynem. Dzięki temu szkliwo dłużej zachowa swój wygląd.",
  },
  {
    q: "Czy można je wkładać do mikrofalówki i piekarnika?",
    a: "Ceramika nie lubi gwałtownych zmian temperatury, dlatego na razie tego nie zalecam. Nie przenoś naczynia z lodówki prosto do gorącego piekarnika ani na odwrót.",
  },
  {
    q: "Czy szkliwa są bezpieczne do kontaktu z żywnością?",
    a: "Tak. Używam gotowych szkliw z atestem do kontaktu z żywnością.",
  },
  {
    q: "Dlaczego każda sztuka wygląda trochę inaczej?",
    a: "Każda praca powstaje ręcznie, a szkliwo w piecu za każdym razem zachowuje się trochę inaczej. Drobne różnice w kształcie i kolorze to cecha rękodzieła, nie wada.",
  },
];

const CareSection = () => (
  <Box
    id="pielegnacja"
    sx={{
      py: { xs: 8, md: 12 },
      background: "#FFF",
      borderTop: "1px solid",
      borderColor: "divider",
      scrollMarginTop: 96,
    }}
  >
    <Container maxWidth="md">
      <Typography variant="overline" color="secondary.main">
        Pielęgnacja
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 4 }}>
        Jak dbać o ceramikę
      </Typography>
      {FAQ.map((item) => (
        <Accordion key={item.q} disableGutters elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);
export default CareSection;
