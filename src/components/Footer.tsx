"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MUILink,
} from "@mui/material";
import { SHOP_ENABLED } from "@/config/features";
import { PATHS } from "@/config/paths";
import { CONTACT } from "@/config/contact";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

const COLUMNS: FooterColumn[] = SHOP_ENABLED
  ? [
      {
        title: "Sklep",
        links: [
          { label: "Kolekcje", href: PATHS.shop },
          { label: "Nowości", href: PATHS.shop },
          { label: "Kontakt", href: PATHS.contact },
        ],
      },
      {
        title: "Informacje",
        links: [
          { label: "Regulamin", href: "#" },
          { label: "Prywatność", href: "#" },
          { label: "Zwroty", href: "#" },
        ],
      },
    ]
  : [
      {
        title: "Strona",
        links: [
          { label: "Prace", href: PATHS.works },
          { label: "O mnie", href: PATHS.about },
          { label: "Proces", href: PATHS.process },
          { label: "Pielęgnacja", href: PATHS.care },
        ],
      },
      {
        title: "Kontakt",
        links: [
          { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
          { label: "Instagram", href: CONTACT.instagram },
        ],
      },
    ];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      py: 6,
      borderTop: "1px solid",
      borderColor: "divider",
      backgroundColor: "#F7F4EE",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, textTransform: "uppercase" }}
          >
            Kobieta na kole
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
            Współczesna ceramika użytkowa inspirowana naturą i tradycją
            rzemiosła.
          </Typography>
        </Grid>
        {COLUMNS.map((col) => (
          <Grid
            key={col.title}
            size={{
              xs: 6,
              md: 3,
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {col.title}
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}
            >
              {col.links.map((l) => (
                <MUILink
                  key={l.label}
                  underline="hover"
                  href={l.href}
                  sx={{ wordBreak: "break-word" }}
                >
                  {l.label}
                </MUILink>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Typography variant="caption" color="text.secondary">
        © {new Date().getFullYear()} Kobieta na kole. Wszelkie prawa
        zastrzeżone.
      </Typography>
    </Container>
  </Box>
);
export default Footer;
