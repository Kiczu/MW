import { Box, Button, Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { CONTACT } from "@/config/contact";

const FollowSection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 10 },
      bgcolor: "primary.main",
      color: "primary.contrastText",
      textAlign: "center",
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="overline" sx={{ opacity: 0.8 }}>
        Pracownia na bieżąco
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
        Zajrzyj do pracowni
      </Typography>
      <Typography sx={{ opacity: 0.9, mb: 4 }}>
        Nowe prace, kulisy toczenia i efekty wypałów pokazuję na bieżąco na
        Instagramie.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<InstagramIcon />}
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener"
          sx={{
            bgcolor: "#FFF",
            color: "primary.main",
            "&:hover": { bgcolor: "#F5F2EB" },
          }}
        >
          Obserwuj
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<MailOutlineIcon />}
          href={`mailto:${CONTACT.email}`}
          sx={{
            color: "#FFF",
            borderColor: "#FFF",
            "&:hover": { borderColor: "#FFF" },
          }}
        >
          Napisz do mnie
        </Button>
      </Box>
    </Container>
  </Box>
);
export default FollowSection;
