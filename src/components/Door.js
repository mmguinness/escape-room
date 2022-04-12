import React, { useState } from "react";
import DoorPopup from "./DoorPopup";
import "./door.css";

export const Door = props => {
  const [doorPopup, setDoorPopup] = useState(false);
  const [escape, setEscape] = useState(false);

  const toggleDoorPopup = () => {
    if (props.inventory.key === true) {
      setEscape(!escape);
      setDoorPopup(!doorPopup);
    } else {
      setDoorPopup(!doorPopup);
    }
  };

  //  behind-door-image.png
  return (
    <article>
      <img
        onClick={toggleDoorPopup}
        role="button"
        className="door"
        src="door.png"
        alt=""
      />
      {escape && (
        <img className="openDoor" src="behind-door-image.png" alt="" />
      )}
      {doorPopup && (
        <DoorPopup
          handleClose={toggleDoorPopup}
          inventory={props.inventory}
          checkedButton={props.checkedButton}
        />
      )}
    </article>
  );
};
