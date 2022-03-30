import MuiDropdown from "../MuiDropdown/MuiDropdown";
import TextField from "@mui/material/TextField";

//store for dispatch
import { MuiDropdownSlice } from "../Slices/MuiDropdownSlice";

import { useDispatch } from "react-redux";

const MuiDropdownOutlined = ({ allOptions }) => {
  const dispatch = useDispatch();

  return (
    <MuiDropdown
      size="small"
      options={allOptions}
      getOptionLabel={(option) => option.Name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Employees"}
          variant="outlined"
          size="small"
        />
      )}
      Selector={(state) =>
        state.MuiDropdowns.DropdownStates.NameDropdownValue.value
      }
      onChange={(event, value) =>
        dispatch(MuiDropdownSlice.actions.changeNameDropdownValue(value))
      }
    />
  );
};

export default MuiDropdownOutlined;
