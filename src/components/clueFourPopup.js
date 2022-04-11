import React from "react";
import Popover from "@mui/material/Popover";

export const ClueFourPopup = (props) => {

  return (
    <>
      <Popover
        onClose={props.toggleClueFourPopup}
        onKeyPress={props.toggleClueFourPopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 500, left: 300 }}
      >
        {props.content}
      </Popover>
    </>
  );
};
