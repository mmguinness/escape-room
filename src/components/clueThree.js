import React, { useState } from "react";
import { ClueThreePopup } from "./clueThreePopup";
import "./clueThree.css";
import Typography from "@mui/material/Typography";

export const ClueThree = (props) => {
  const [clueThreePopup, setClueThreePopup] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [clueOnWall, setClueOnWall] = useState(false);
  
  const handlePopup = () => {
    props.pickUpClueThree();
    setClueThreePopup(!clueThreePopup);
  };
  const handleChange = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  const checkInputs = () => {
    if (input === "time") {
      setAnswer("E");
      setClueThreePopup(!clueThreePopup);
      setClueOnWall(true);
      props.handleBlankThree();
    } else {
      setClueThreePopup(!clueThreePopup);
    }
  };

  return (
    <>
      {clueOnWall && <h1 className="clueThreeLetter">{answer}</h1>}
      <img
        onClick={handlePopup}
        role="button"
        className="clueThree"
        src="clue-3.png"
        alt=""
      />
      {clueThreePopup && (
        <ClueThreePopup
          toggleClueThreePopup={checkInputs}
          inventory={props.inventory}
          input={input}
          content={
            <div>
              <Typography sx={{ p: 2 }}>
                A stitch in 
                <input
                  className="word"
                  value={input}
                  onChange={handleChange}
                ></input>
                saves nine
              </Typography>
            </div>
          }
        />
      )}
    </>
  );
};
