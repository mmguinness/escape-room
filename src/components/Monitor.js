import React, { useState } from "react";
import { MonitorPopup } from "./MonitorPopup";
import "./monitor.css";

export const Monitor = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                <form>
                  Roses are <input type="text" id="wordOne" name="wordOne" />
                  <br />
                  <br />
                  <input type="text" id="wordOne" name="wordOne" /> are blue
                </form>{" "}
                <br />
                I love coding <br />
                <br />
                You should too!
              </div>
            </div>
          }
        />
      )}
    </article>
  );
};
