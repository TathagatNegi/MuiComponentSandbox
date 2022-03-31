import { createTheme } from "@mui/material/styles";
const DefaultModaltheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          color: "White",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          alignContent: "center"
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
          padding: "0px 2px"
        },
        body1: {
          fontFamily: "Roboto",
          textColor: "bd6c6b",
          padding: "0px 10px",
          textAlign: "left"
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          textAlign: "center"
        }
      }
    }
  }
});

export default DefaultModaltheme;
