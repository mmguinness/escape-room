import React, { useState } from "react";
import DoorPopup from "./DoorPopup";
import "./door.css";

export const Door = (props) => {
  const [doorPopup, setDoorPopup] = useState(false);
 
  
  const toggleDoorPopup = () => {
    setDoorPopup(!doorPopup);
  };

 
  return (
    <article>
      <img
        onClick={toggleDoorPopup}
        role="button"
        className="door"
        src="door.png"
        alt=""
      />
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
