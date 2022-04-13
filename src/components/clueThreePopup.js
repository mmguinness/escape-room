import React from "react";
import Popover from "@mui/material/Popover";

export const ClueThreePopup = props => {
  return (
    <>
      <Popover
        onClose={props.toggleClueThreePopup}
        onKeyPress={(props.input === "time") && props.toggleClueThreePopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 170, left: 690 }}
      >
        {props.content}
      </Popover>
    </>
  );
};
