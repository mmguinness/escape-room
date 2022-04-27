import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export const BookPopup = (props) => {

  return (
    <>
      <Popover
        onClose={props.toggleBookPopup}
        onKeyPress={props.toggleBookPopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 370, left: 720 }}
      >
        <Typography sx={{ p: 2 }}>
          A stack of books about common
          <br />
          sayings and proverbs.
          <br />
          <br />
          Example:
          <br />
          It's not hard it's <strong>new</strong>
          <br />
          Find and complete these sayings:
          <br />A stitch in <strong>{props.blankThree}</strong>saves nine
          <br />
          <strong>{props.blankFour}</strong> before you leap
          <br />
          Practice makes
          <strong>{props.blankOne}</strong>
        </Typography>
      </Popover>
    </>
  );
};
