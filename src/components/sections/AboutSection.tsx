import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

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
          <Box
            sx={{
              position: "relative",
              aspectRatio: "4 / 3",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/studio/pracownia.jpg"
              alt="Pracownia ceramiczna: stół z narzędziami, półki ze szkliwami i ceramiką"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="overline" color="secondary.main">
            O mnie
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Kobieta na kole
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            To moja mała, domowa pracownia ceramiki. Kilka lat temu zapisałam
            się na zajęcia garncarskie – z ciekawości, która szybko zamieniła
            się w pasję. Praca z gliną daje spokój, jakiego trudno szukać gdzie
            indziej: czas zwalnia, myśli się układają, a w dłoniach powoli
            powstaje nowa forma.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Każdą pracę formuję ręcznie, dlatego żadne dwie nie są identyczne.
            Tworzę zarówno rzeczy do codziennego użytku, jak i takie, które po
            prostu cieszą oko na półce. Ceramiki wciąż się uczę i każdy wypał
            czegoś mnie uczy.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default AboutSection;
