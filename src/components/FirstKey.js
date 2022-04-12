import { React } from "react";
import "./firstKey.css";

export const FirstKey = props => {
  return (
    <img
      className="firstKey"
      onClick={props.pickUpKey}
      src={"gold_keyimg.png"}
      role="button"
      alt=""
    />
  );
};
