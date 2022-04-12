import React, { useState } from "react";
import { ClueFourPopup } from "./clueFourPopup";
import "./clueFour.css";
import Typography from "@mui/material/Typography";

export const ClueFour = (props) => {
  const [clueFourPopup, setClueFourPopup] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [clueOnWall, setClueOnWall] = useState(false);
  
  const handlePopup = () => {
    props.pickUpClueFour();
    setClueFourPopup(!clueFourPopup);
  };
  const handleChange = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  const checkInputs = () => {
    if (input === "look") {
      setAnswer("D");
      setClueFourPopup(!clueFourPopup);
      setClueOnWall(true);
      props.handleBlankFour();
    }
  };

  return (
    <>
      {clueOnWall && <h1 className="clueFourLetter">{answer}</h1>}
      <img
        onClick={handlePopup}
        role="button"
        className="clueFour"
        src="clueFour.png"
        alt=""
      />
      {clueFourPopup && (
        <ClueFourPopup
          toggleClueFourPopup={checkInputs}
          inventory={props.inventory}
          content={
            <div>
              <Typography sx={{ p: 2 }}> 
                <input
                  className="word"
                  value={input}
                  onChange={handleChange}
                ></input>
                before you leap
              </Typography>
            </div>
          }
        />
      )}
    </>
  );
};
