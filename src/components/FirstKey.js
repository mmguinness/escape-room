import { React } from "react";
import keyImage from "./keyimg.png"

export const FirstKey = (props) => {
  return (
     <img className="firstKey" onClick={props.pickUpKey}
     src={keyImage} role="button" height="100" width="100" alt=""/>
  );
};
