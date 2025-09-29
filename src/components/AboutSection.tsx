"use client";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const AboutSection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      background: "#FFF",
      borderTop: "1px solid",
      borderColor: "divider",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 340,
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1580933908360-1b8225c6aee5?q=80&w=1600&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="secondary.main">
            O nas
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Rzemiosło i materia
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Tworzymy krótkie serie naczyń z lokalnych mas, szkliwione ręcznie.
            Stawiamy na prostotę formy i ciepłą paletę inspirowaną ziemią.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="outlined" color="primary">
              Poznaj historię
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default AboutSection;
