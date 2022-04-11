import "./room.css";
import { useState } from "react";
import { Door } from "./Door";
import { FirstKey } from "./FirstKey";
import { KeyPopupBox } from "./KeyPopupBox";
import { Monitor } from "./Monitor";
import { ClueOne } from "./clueOne";
import { Book } from "./book";
import CountdownTimer from '../CountdownTimer';


export const Room = () => {
  const [inventory, setInventory] = useState({ key: false, clueOne: false });
  const [keyPopup, setKeyPopup] = useState(false);

  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };

  const pickUpClueOne = () => {
    setInventory({ ...inventory, clueOne: true });
  };

  console.log(inventory);

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <article>
      <Door></Door>
      <Monitor></Monitor>
      {inventory.key === false && <FirstKey pickUpKey={pickUpKey} />}
      <img className="room" src="stock-escape-room-interior.png" alt="" />
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
      <ClueOne pickUpClueOne={pickUpClueOne} />
      <Book />
      <div>
        <h1>Countdown Timer</h1>
        <div>  <CountdownTimer targetDate={dateTimeAfterThreeDays} /></div>
      </div>
    </article>
  );
};
