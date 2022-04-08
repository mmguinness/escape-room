import React, { useState } from "react";
import { MonitorPopup } from "./MonitorPopup";
import "./monitor.css";

export const Monitor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChangeOne = eventOne => {
    setInputOne(eventOne.target.value.toLowerCase());
  };

  const handleChangeTwo = eventTwo => {
    const word0 = eventTwo.target.value.toLowerCase();
    const word2 = word0.charAt(0).toUpperCase() + word0.slice(1);
    setInputTwo(word2);
  };

  const checkInputs = () => {
    if (inputOne === "red" && inputTwo === "Violets") {
      setAnswer("Safe Pin: 1234");
    } else {
      setAnswer("Try again");
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
                {/* normal object variable can not be seen here for react.
                We had to create a state named answer to be able to pull it here */}
                <h3 className="pin">{answer}</h3>
              </div>
            </div>
          }
        />
      )}
    </article>
  );
};
