import React from "react";
import "./safepopup.css";

export const SafePopup = props => {
  return (
    <div className="safepopup-box">
      <div className="safebox">
        <button className="safebtn-close" onClick={props.handleClose}>
          x
        </button>
        {props.content}
      </div>
    </div>
  );
};
