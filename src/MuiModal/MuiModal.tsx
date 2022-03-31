import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { ModalPanelPropClass } from "../PropClasses";
import deepmerge from "@mui/utils/deepmerge";
import DefaultModaltheme from "../Themes/MuiModalTheme";

const MuiModal = (props: ModalPanelPropClass) => {
  if (props.open === false) {
    return null;
  }

  const inputFieldTheme =
    props.customTheme != null
      ? createTheme(deepmerge(DefaultModaltheme, props.customTheme))
      : DefaultModaltheme;

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    padding: 0,
    outline: "none",
    border:
      props.success === true ? "1.2px solid #7cb467" : "1.2px solid #bd6666"
  };
  const handleClose = (event: React.MouseEvent, reason: string) => {
    if (reason !== "backdropClick") {
      props.onChange();
    }
  };

  let backgroundColor = props.success === true ? "#7cb467" : "#bd6666";
  let closeBtn = (
    <Button
      size="small"
      variant="contained"
      onClick={handleClose as any}
      sx={{
        backgroundColor: backgroundColor,
        ":hover": {
          backgroundColor: props.success === true ? "#7cb467" : "#bd6666"
        }
      }}
    >
      Close
    </Button>
  );

  let TopTextField = (
    <Typography
      variant="h6"
      component="h2"
      sx={{
        fontSize: "16px",
        lineHeight: "34px",
        fontFamily: "Roboto"
      }}
    >
      {props.success === true ? "Success" : "Failure"}
    </Typography>
  );

  let TextMessageField = (
    <Typography
      sx={{ mt: 2, fontFamily: "Roboto" }}
      style={{ color: backgroundColor }}
    >
      <ul style={{ paddingLeft: "10px" }}>
        {props.message.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </Typography>
  );

  const renderSuccess = () => {
    return (
      <div>
        <Modal
          open
          onClose={handleClose}
          sx={{
            border: 1
          }}
        >
          <Box sx={style}>
            <Container
              disableGutters
              style={{
                backgroundColor: backgroundColor
              }}
            >
              <CheckCircleIcon />
              {TopTextField}
            </Container>
            {TextMessageField}
            <div
              style={{
                margin: "auto",
                textAlign: "center",
                padding: "5px  0px"
              }}
            >
              {closeBtn}
            </div>
          </Box>
        </Modal>
      </div>
    );
  };

  const renderFailure = () => {
    return (
      <div>
        <Modal
          open
          onClose={handleClose}
          sx={{
            border: 1
          }}
        >
          <Box sx={style}>
            <Container
              disableGutters
              style={{
                backgroundColor: backgroundColor
              }}
            >
              <CancelIcon />
              {TopTextField}
            </Container>
            {TextMessageField}
            <div
              style={{
                margin: "auto",
                textAlign: "center",
                padding: "5px  0px"
              }}
            >
              {closeBtn}
            </div>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <ThemeProvider theme={inputFieldTheme}>
      <div>{props.success === true ? renderSuccess() : renderFailure()}</div>
    </ThemeProvider>
  );
};

export default MuiModal;
