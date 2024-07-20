import { createTheme } from "@mui/material/styles";
import { green, purple, yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      dark: yellow[500],
    },
    secondary: { main: green[500] },
    error: { main: "#26355D" },
    warning: { main: "#AF47D2" },
    info: { main: "#FF8F00" },
    success: { main: "#FFDB00" },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
    },
  },
  spacing: 8, // in pixels
  shape: {
    borderRadius: 8, // in pixels
  },
});
