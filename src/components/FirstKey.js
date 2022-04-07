import { React } from "react";
import keyImage from "./keyimg.png"

export const FirstKey = (props) => {
  return (
    <button className="firstKey" onClick={props.pickUpKey}>
      <img src={keyImage} height="100" width="100" />
    </button>
  );
};
