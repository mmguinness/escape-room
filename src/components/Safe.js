import React, { useState } from "react";
import { SafePopup } from "./Safepopup";
import "./safe.css";

export const Safe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputPin, setInputPin] = useState("");
  const [answer, setAnswer] = useState("Enter your pin");

  const handleChangePin = event => {
    setInputPin(event.target.value);
  };

  const checkInput = () => {
    if (inputPin === "1234") {
      setAnswer("Correct Pin");
      setTimeout(closePopup, 1000);
      // setKey(true)
      // closedSafe(false)
      // opensafe(true)
    } else {
      setAnswer("Incorrect Pin");
    }
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const toggleSafePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <img
        className="safe"
        onClick={toggleSafePopup}
        role="button"
        src="closedsafe.jpg"
        alt=""
      />
      {isOpen && (
        <SafePopup
          handleClose={toggleSafePopup}
          content={
            <article>
              <h3 className="pinResponse">{answer}</h3>
              <div>
                <input
                  type="number"
                  className="pinNumber"
                  value={inputPin}
                  onChange={handleChangePin}
                ></input>
                <br />
                <br />
                <button className="safeSubmit" onClick={checkInput}>
                  Submit
                </button>
              </div>
            </article>
          }
        />
      )}
    </article>
  );
};
