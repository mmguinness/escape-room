import React from "react";
import Popover from "@mui/material/Popover";

const DoorPopup = props => {
  const locked = "Door is locked"
  const goToUnlock = "Congratulations you found the key, do you wish to use it?"
  const unlocked = "Door is now open, RUN!"

  const unLockDoor = () => {
    
  }

  return (
    <>
      <Popover
        onClose={props.handleClose}
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 600, left: 900 }}
      >
        <div>
          {props.inventory.key === true && goToUnlock}
          <button onClick={unlocked}>Yes</button>
        </div>

        <div>{props.inventory.key === false && locked}</div>
      </Popover>
    </>
  );
};

export default DoorPopup;
