import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./doorpopup.css";

const DoorPopup = props => {
  const locked = "Door is locked, explore the room!"
  const unlocked = "Congratulations, you win!"

  return (
    <>
      <Popover
        onClose={props.handleClose}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 27, left: 347 }}
      >
        <Typography variant="h5" sx={{ p: 4 }}>
          <div>{props.inventory.key === true && unlocked}</div>
          <div>{props.inventory.key === false && locked}</div>
        </Typography>
      </Popover>
    </>
  );
};

export default DoorPopup;
