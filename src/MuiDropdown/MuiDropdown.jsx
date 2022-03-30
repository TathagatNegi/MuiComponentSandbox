import Autocomplete from "@mui/material/Autocomplete";

import { useSelector } from "react-redux";

import MuiDropdownTheme from "../Themes/MuiDropdownTheme";
import { ThemeProvider } from "@mui/material/styles";

const MuiDropdown = (props) => {
  const { Selector, DropdownType, ...restProps } = props;

  //Redux value
  const value = useSelector(Selector);

  return (
    <ThemeProvider theme={MuiDropdownTheme}>
      <Autocomplete
        //value={value}
        {...restProps}
        value={value ? value : restProps.multiple ? [] : null}
      />
    </ThemeProvider>
  );
};

export default MuiDropdown;
