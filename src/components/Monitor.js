import React, { useState } from "react";
import { MonitorPopup } from "./MonitorPopup";
import "./monitor.css";

export const Monitor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const handleChangeOne = eventOne => {
    setInputOne(eventOne.target.value.toLowerCase());
  };

  const handleChangeTwo = eventTwo => {
    setInputTwo(eventTwo.target.value.toLowerCase());
  };

  const checkInputs = () => {
    if (inputOne === "red" && inputTwo === "violets") {
      return console.log("correct answer");
    } else {
      console.log("try again");
    }
  };

  const toggleMonitorPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <img
        onClick={toggleMonitorPopup}
        role="button"
        className="monitor"
        src="monitor.png"
        alt=""
      />
      {isOpen && (
        <MonitorPopup
          handleClose={toggleMonitorPopup}
          content={
            <div>
              <h3>Puzzle</h3>
              <div>
                Roses are{" "}
                <input
                  className="wordOne"
                  value={inputOne}
                  onChange={handleChangeOne}
                ></input>
                <br />
                <br />
                <input
                  className="wordTwo"
                  value={inputTwo}
                  onChange={handleChangeTwo}
                ></input>
                <nbsp /> are blue
                <br />
                <br />
                I love coding <br />
                <br />
                You should too!
                <br />
                <br />
                <button onClick={checkInputs}>Submit</button>
              </div>
            </div>
          }
        />
      )}
    </article>
  );
};
