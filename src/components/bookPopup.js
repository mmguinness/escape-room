import React from "react";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export const BookPopup = (props) => {

  // const [clueOneWord, setClueOneWord] = useState("testing")

  // const showClueLetter = () => {
  //   setClueOneWord("perfect")
  // }

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
          It's not hard it's _______
          <br />
          A stitch in ______ saves nine
          <br />
          ______ before you leap
          <br />
          Practice makes _______
          <br />
          {/* {props.inventory.clueOne === true && showClueLetter} */}
        </Typography>
      </Popover>
    </>
  );
};
