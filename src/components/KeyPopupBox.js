import React from "react";
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';

export const KeyPopupBox = props => {
  return (
    <>
      <Popover
        onClose={props.handleCloseBox}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 600, left: 900 }}
      >
        <Typography sx={{ p: 2 }}>You picked up a key!</Typography>
      </Popover>
    </>
  );
};
