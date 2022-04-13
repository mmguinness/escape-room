import React from "react";
import Popover from "@mui/material/Popover";

export const ClueFourPopup = props => {
  return (
    <>
      <Popover
        onClose={props.toggleClueFourPopup}
        onKeyPress={(props.input === "look") && props.toggleClueFourPopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 255, left: 690 }}
      >
        {props.content}
      </Popover>
    </>
  );
};
