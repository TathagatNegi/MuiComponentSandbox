import React from "react";
import MuiModal from "../MuiModal/MuiModal";
import * as PropClasses from "../PropClasses";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const MuiModalSuccess = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  let DataForModal = new PropClasses.ModalPanelPropClass();
  DataForModal.message = ["Naruto", "Sasuke", "Itachi"];
  DataForModal.success = true;
  DataForModal.open = open;
  DataForModal.onChange = handleClose;

  const newtheme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {}
        }
      }
    }
  });
  DataForModal.customTheme = newtheme;

  return (
    <div>
      <Button size="small" variant="contained" onClick={handleClose}>
        Open Modal
      </Button>
      <MuiModal {...DataForModal} />
    </div>
  );
};

export default MuiModalSuccess;
