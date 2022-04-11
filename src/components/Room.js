import "./room.css";
import { useState } from "react";
import { Door } from "./Door";
import { FirstKey } from "./FirstKey";
import { KeyPopupBox } from "./KeyPopupBox";
import { Monitor } from "./Monitor";
import { ClueOne } from "./clueOne";
import { ClueTwo } from "./clueTwo";
import { ClueThree } from "./clueThree";
import { Book } from "./book";

export const Room = () => {
  const [inventory, setInventory] = useState({
    key: false,
    clueOne: false,
    clueTwo: false,
    clueThree: false,
  });

  const [keyPopup, setKeyPopup] = useState(false);
  const [blankOne, setBlankOne] = useState(" blank ");
  const [blankTwo, setBlankTwo] = useState(" blank ");
  const [blankThree, setBlankThree] = useState(" blank ");

  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };

  const pickUpClueOne = () => {
    setInventory({ ...inventory, clueOne: true });
  };
  const handleBlankOne = () => {
    setBlankOne(" perfect");
  };
  const pickUpClueTwo = () => {
    setInventory({ ...inventory, clueTwo: true });
  };
  const handleBlankTwo = () => {
    setBlankTwo(" new");
  };
  const pickUpClueThree = () => {
    setInventory({ ...inventory, clueThree: true });
  };
  const handleBlankThree = () => {
    setBlankThree(" time ");
  };

  console.log(inventory);

  return (
    <article>
      <Door></Door>
      <Monitor></Monitor>
      {inventory.key === false && <FirstKey pickUpKey={pickUpKey} />}
      <img className="room" src="stock-escape-room-interior.png" alt="" />
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
      <ClueOne
        pickUpClueOne={pickUpClueOne}
        blankOne={blankOne}
        handleBlankOne={handleBlankOne}
      />
      <ClueTwo
        pickUpClueTwo={pickUpClueTwo}
        blankTwo={blankTwo}
        handleBlankTwo={handleBlankTwo}
      />
      <ClueThree
        pickUpClueThree={pickUpClueThree}
        blankThree={blankThree}
        handleBlankThree={handleBlankThree}
      />
      <Book
        inventory={inventory}
        blankOne={blankOne}
        blankTwo={blankTwo}
        blankThree={blankThree}
      />
    </article>
  );
};
