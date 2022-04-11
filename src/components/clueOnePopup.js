import React from "react";
import Popover from "@mui/material/Popover";

export const ClueOnePopup = (props) => {

  return (
    <>
        <Popover
          onClose={props.toggleClueOnePopup}
          onKeyPress={props.toggleClueOnePopup}
          open={true}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 500, left: 300 }}
        >
          {props.content}
        </Popover>
    </>
  );
};
