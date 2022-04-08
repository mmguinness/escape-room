import { React } from "react";
import keyImage from "./keyimg.png"
import "./firstKey.css";

export const FirstKey = (props) => {
  return (
     <img className="firstKey" onClick={props.pickUpKey}
     src={keyImage} role="button" alt=""/>
  );
};
