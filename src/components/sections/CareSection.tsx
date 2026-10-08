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
    a: "Tak. Naczynia użytkowe szkliwię szkliwami na wysoką temperaturę, dlatego można je myć w zmywarce.",
  },
  {
    q: "Czy można je wkładać do piekarnika?",
    a: "Tak. Unikaj tylko gwałtownych zmian temperatury – nie wkładaj zimnego naczynia prosto do rozgrzanego piekarnika.",
  },
  {
    q: "A do mikrofalówki?",
    a: "Jeszcze tego nie sprawdziłam, dlatego na razie lepiej nie podgrzewać w nich jedzenia w mikrofalówce.",
  },
  {
    q: "Czy szkliwa są bezpieczne do kontaktu z żywnością?",
    a: "Naczynia użytkowe zawsze szkliwię szkliwami z atestem do kontaktu z żywnością. Prace dekoracyjne, np. figurki, nie zawsze – nie służą do jedzenia ani picia.",
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
