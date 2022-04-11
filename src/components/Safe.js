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

  const resetValue = () => {
    setInputPin("");
  };

  const checkInput = () => {
    if (inputPin === "1234") {
      setAnswer("Correct Pin");
      setTimeout(closePopup, 1000);
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
    <section>
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
                  className="pinNumber"
                  type="number"
                  value={inputPin}
                  onChange={handleChangePin}
                ></input>
                <br />
                <br />
                <button className="safeSubmit" onClick={checkInput}>
                  Submit
                </button>
                <button className="safeReset" onClick={resetValue}>
                  X
                </button>
              </div>
            </article>
          }
        />
      )}
    </section>
  );
};
