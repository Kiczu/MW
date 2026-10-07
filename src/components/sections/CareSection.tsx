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
    a: "[Tak / nie / zalecane mycie ręczne — dlaczego.]",
  },
  {
    q: "Czy można je wkładać do mikrofalówki i piekarnika?",
    a: "[Odpowiedź, uwagi o szkliwach z metalami, szoku termicznym.]",
  },
  {
    q: "Czy szkliwa są bezpieczne do kontaktu z żywnością?",
    a: "[Jakich szkliw używasz, czy mają atesty.]",
  },
  {
    q: "Dlaczego każda sztuka wygląda trochę inaczej?",
    a: "[Ręczne toczenie, zachowanie szkliwa w piecu — to cecha, nie wada.]",
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
