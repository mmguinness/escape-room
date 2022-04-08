import React from "react";
import Popover from "@mui/material/Popover";

const DoorPopup = props => {
  return (
        <>
      <Popover
        onClose={props.handleClose}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 600, left: 900 }}
      >
        Door is locked!
      </Popover>
    </>
  );
};

export default DoorPopup;
