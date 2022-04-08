import "./room.css";
import { useState } from "react";
import { Door } from "./Door";
import { FirstKey } from "./FirstKey";
import { KeyPopupBox } from "./KeyPopupBox";

export const Room = () => {
  const [inventory, setInventory] = useState({ key: false, book: false });
  const [keyPopup, setKeyPopup] = useState(false);

  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };

  console.log(inventory);

  return (
    <article>
      <Door inventory={inventory}/>
      <img className="room" src="Plain-White-Walls.jpg" alt="" />
      <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
    </article>
  );
};

/* 

*/

/*  As a player, 
So I can interact with my environment, 
I want to be able to use the key and open the door 

Ask if you have the key
Option to say yes
If yes door opens
*/