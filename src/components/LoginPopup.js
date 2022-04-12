import React from "react";
import "./loginPopup.css";

export const LoginPopup = props => {
    return (
      <div className="loginpopup-box">
        <div className="loginbox">
          <button className="loginbtn-close" onClick={props.loginClose}>
            x
          </button>
          {props.content}
        </div>
      </div>
    );
  };