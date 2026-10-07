import { Box, Container, Grid, Link, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CONTACT } from "@/config/contact";

const ITEMS = [
  {
    icon: <MailOutlineIcon color="primary" />,
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: <InstagramIcon color="primary" />,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
  },
];

const ContactSection = () => (
  <Box id="kontakt" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 96 }}>
    <Container maxWidth="lg">
      <Typography variant="overline" color="secondary.main">
        Kontakt
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 1 }}>
        Porozmawiajmy
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 5, maxWidth: 640 }}
      >
        Masz pytanie o ceramikę albo którąś z prac? Napisz maila lub wiadomość
        na Instagramie.
      </Typography>
      <Grid container spacing={4}>
        {ITEMS.map((item) => (
          <Grid key={item.label} size={{ xs: 12, sm: 6 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              {item.icon}
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {item.label}
                </Typography>
                <Link href={item.href} underline="hover">
                  {item.value}
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
export default ContactSection;
