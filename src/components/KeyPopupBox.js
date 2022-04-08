import React from "react";
import Popover from "@mui/material/Popover";

export const KeyPopupBox = (props) => {
  return (
    <>
      <Popover
        onClose={props.handleCloseBox}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 600, left: 900 }}
      >
        You picked up a key!
      </Popover>
    </>
  );
};
