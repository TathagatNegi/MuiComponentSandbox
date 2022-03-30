import MuiDropdown from "../MuiDropdown/MuiDropdown";
import TextField from "@mui/material/TextField";

//store for dispatch
import { MuiDropdownSlice } from "../Slices/MuiDropdownSlice";

import { useDispatch } from "react-redux";

import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import DoneIcon from "@mui/icons-material/Done";

const MuiDropdownOutlinedMultiple = ({ allOptions }) => {
  const dispatch = useDispatch();

  return (
    <MuiDropdown
      size="small"
      options={allOptions}
      defaultValue={[]}
      getOptionLabel={(option) => option.Name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Employees"}
          variant="outlined"
          size="small"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <List {...props}>
          <ListItem
            key={option.ID}
            secondaryAction={
              <Checkbox
                icon={<span />}
                checkedIcon={<DoneIcon />}
                checked={selected}
              />
            }
            disablePadding
          >
            {option.Name}
          </ListItem>
        </List>
      )}
      Selector={(state) =>
        state.MuiDropdowns.DropdownStates.NameMultipleDropdownValue.value
      }
      onChange={(event, value) =>
        dispatch(
          MuiDropdownSlice.actions.changeNameMultipleDropdownValue(value)
        )
      }
      multiple
    />
  );
};

export default MuiDropdownOutlinedMultiple;
