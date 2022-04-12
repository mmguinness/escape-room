import React, { useState } from "react";
import { ClueOnePopup } from "./clueOnePopup";
import "./clueOne.css";
import Typography from "@mui/material/Typography";

export const ClueOne = (props) => {
  const [clueOnePopup, setClueOnePopup] = useState(false);
  const [input, setinput] = useState("");
  const [answer, setAnswer] = useState("");
  const [clueOnWall, setClueOnWall] = useState(false);
  
  const handlePopup = () => {
    props.pickUpClueOne();
    setClueOnePopup(!clueOnePopup);
  };
  const handleChange = (eventOne) => {
    setinput(eventOne.target.value.toLowerCase());
  };

  const checkInputs = () => {
    if (input === "perfect") {
      setAnswer("C");
      setClueOnePopup(!clueOnePopup);
      setClueOnWall(true);
      props.handleBlankOne();
    } else {
      setAnswer("Try again");
    }
  };

  console.log(answer);

  return (
    <>
      {clueOnWall && <h1 className="clueOneLetter">{answer}</h1>}
      <img
        onClick={handlePopup}
        role="button"
        className="clueOne"
        src="clue-1.png"
        alt=""
      />
      {clueOnePopup && (
        <ClueOnePopup
          toggleClueOnePopup={checkInputs}
          inventory={props.inventory}
          content={
            <div>
              <Typography sx={{ p: 2 }}>
                Practice
                makes 
                <input
                  className="word"
                  value={input}
                  onChange={handleChange}
                ></input>
              </Typography>{" "}
            </div>
          }
        />
      )}
    </>
  );
};
