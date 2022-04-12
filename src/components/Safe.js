import React, { useState } from "react";
import { SafePopup } from "./Safepopup";
import "./safe.css";

export const Safe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputPin, setInputPin] = useState("");
  const [answer, setAnswer] = useState("Enter your pin");
  const [openSafe, setOpenSafe] = useState(false);
  const [closedSafe, setClosedSafe] = useState(true);

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
      setOpenSafe(true);
      setClosedSafe(false);
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
      {openSafe && <img className="openSafe" src="Safe_Open.png" alt="" />}
      {closedSafe && (
        <img
          className="safe"
          onClick={toggleSafePopup}
          role="button"
          src="Safe_Closed.png"
          alt=""
        />
      )}
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
