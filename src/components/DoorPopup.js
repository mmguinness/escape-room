import React from "react";
import "./doorpopup.css";

const DoorPopup = props => {
  return (
    <div className="doorpopup-box">
      <div className="doorbox">
        <button className="doorbtn-close" onClick={props.handleClose}>
          x
        </button>
        {props.content}
      </div>
    </div>
  );
};

export default DoorPopup;
