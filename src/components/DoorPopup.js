import React from "react";
import Popover from "@mui/material/Popover";

const DoorPopup = props => {
  const locked = "Door is locked"
  const unlocked = "Door is now open, RUN!"
  return (
        <>
      <Popover
        onClose={props.handleClose}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 600, left: 900 }}
      >
        <div>{(props.inventory.key === true) && unlocked}</div>
        <div>{(props.inventory.key === false) && locked}</div>
      </Popover>
    </>
  );
};

export default DoorPopup;
