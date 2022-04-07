import React from "react";
// import "./keypopup.css";

export const KeyPopupBox = (props) => {
  return (
    <div className="doorpopup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleCloseBox}>
          x
        </button>
        <div>
          <h3>You picked up a key!</h3>
        </div>
      </div>
    </div>
  );
};

