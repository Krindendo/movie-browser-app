import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#082032",
      light: "#334756",
      dark: "#2C394B"
    },
    secondary: {
      main: "#FF4C29"
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;

// #082032 primary
// #2C394B
// #334756
// #FF4C29 secundary
