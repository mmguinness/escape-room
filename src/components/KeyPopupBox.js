import React from "react";
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';
// import './KeyPopupBox.css'

export const KeyPopupBox = props => {
  return (
    <>
      <Popover
        onClose={props.handleCloseBox}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 625, left: 366 }} //extract this into a css file?
      >
        <Typography sx={{ p: 2 }}>You picked up a key!</Typography>
      </Popover>
    </>
  );
};
