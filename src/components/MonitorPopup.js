import React from "react";
import "./monitorpopup.css";

export const MonitorPopup = props => {
  return (
    <div className="monitorpopup-box">
      <div className="monitorbox">
        <button className="monitorbtn-close" onClick={props.handleClose}>
          x
        </button>
        {props.content}
      </div>
    </div>
  );
};
