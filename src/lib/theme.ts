import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F5F2EB",
      paper: "#FFFFFF",
    },
    primary: { main: "#792B2D", contrastText: "#FFFFFF" },
    secondary: { main: "#A9A17A" },
    text: { primary: "#2F2F2F", secondary: "#5A4633" },
    divider: "#E6E1D8",
  },
  typography: {
    h1: { fontWeight: 700, letterSpacing: ".5px" },
    h2: { fontWeight: 700, letterSpacing: ".2px" },
    button: { textTransform: "none", letterSpacing: 0.2, fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20 },
        containedPrimary: { boxShadow: "none" },
        outlinedPrimary: { borderWidth: 2, "&:hover": { borderWidth: 2 } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #E6E1D8",
          boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          transition: "transform .3s ease, box-shadow .3s ease",
          "&:hover": {
            boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiChip: { styleOverrides: { root: { backdropFilter: "saturate(1.2)" } } },
  },
});

export default responsiveFontSizes(theme);
