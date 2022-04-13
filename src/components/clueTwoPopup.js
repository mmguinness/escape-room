import React from "react";
import Popover from "@mui/material/Popover";

export const ClueTwoPopup = props => {
  return (
    <>
      <Popover
        onClose={props.toggleClueTwoPopup}
        onKeyPress={(props.input === "new") && props.toggleClueTwoPopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 170, left: 122 }}
      >
        {props.content}
      </Popover>
    </>
  );
};
