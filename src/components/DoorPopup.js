import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./doorpopup.css";

const DoorPopup = props => {
  const locked = "Door is locked"
  const unlocked = "Door is now open, RUN!"

  return (
    <>
      <Popover
        onClose={props.handleClose}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 500, left: 0 }}
      >
        <Typography sx={{ p: 2 }}>
          <div>{props.inventory.key === true && unlocked}</div>
          <div>{props.inventory.key === false && locked}</div>
        </Typography>
      </Popover>
    </>
  );
};

export default DoorPopup;
