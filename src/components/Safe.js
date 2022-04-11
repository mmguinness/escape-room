import React, { useState } from "react";
import { SafePopup } from "./Safepopup";
import "./safe.css";

export const Safe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputPin, setInputPin] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChangePin = event => {
    setInputPin(event.target.value);
    if (inputPin === "1234") {
      setAnswer("here is the key");
    }
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
              <h3>Enter your pin</h3>
              <div>
                <input
                  className="pinNumber"
                  value={inputPin}
                  onChange={handleChangePin}
                ></input>
                {answer}
              </div>
            </article>
          }
        />
      )}
    </article>
  );
};
