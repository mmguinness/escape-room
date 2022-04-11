import React from "react";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export const BookPopup = (props) => {
  const [blankOne, setBlankOne] = useState(" blank ");

  const handleBlankOne = () => {
    setBlankOne("perfect");
  };

  return (
    <>
      <Popover
        onClose={props.toggleBookPopup}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 500, left: 300 }}
      >
        <Typography sx={{ p: 2 }}>
          A stack of books about common sayings and proverbs.
          <br />
          Clues:
          <br />
          It's not hard it's <strong>{blankOne}</strong>
          <br />A stitch in <strong>{blankOne}</strong>saves nine
          <br />
          <strong>{blankOne}</strong> before you leap
          <br />
          Practice makes
          <strong>{blankOne}</strong>
          <br />
        </Typography>
      </Popover>
    </>
  );
};
