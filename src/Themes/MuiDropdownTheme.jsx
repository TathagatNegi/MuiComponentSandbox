import { createTheme } from "@mui/material/styles";

const MuiDropdownTheme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        input: {
          fontSize: "14px"
        },
        option: {
          height: 33,
          "&$selected": {
            backgroundColor: "red"
          }
        },
        "&$selected": {
          backgroundColor: "yellow"
        },
        listbox: {
          fontSize: "14px",
          color: "#212121"
        },
        "& .MuiListItem-root": {
          fontSize: "24px",
          color: "red"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          color: "#666666"
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "yellow"
          }
        },
        "&$selected": {
          backgroundColor: "red"
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "pink"
          }
        },
        "&$selected": {
          backgroundColor: "black"
        }
      }
    }
  }
});

export default MuiDropdownTheme;
