import React from "react";
import Popover from "@mui/material/Popover";

export const ClueTwoPopup = (props) => {

  return (
    <>
      <Popover
        onClose={props.toggleClueTwoPopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 500, left: 300 }}
      >
        {props.content}
      </Popover>
    </>
  );
};
