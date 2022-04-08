import React from "react";
import "./doorpopup.css";

const DoorPopup = props => {
  return (
    <div className="doorpopup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}>
          x
        </button>
        {props.content}
      </div>
    </div>
  );
};

export default DoorPopup;
