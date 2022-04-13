import React from "react";
import Popover from "@mui/material/Popover";

export const ClueOnePopup = props => {
  return (
    <>
      <Popover
        onClose={props.toggleClueOnePopup}
        onKeyPress={(props.input === "perfect") && props.toggleClueOnePopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 280, left: 122 }}
      >
        {props.content}
      </Popover>
    </>
  );
};
