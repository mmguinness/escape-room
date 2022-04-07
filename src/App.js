import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import { KeyPopupBox } from "./components/KeyPopupBox";
import "./App.css";

import { Room } from "./components/Room";

function Game() {
  const [inventory, setInventory] = useState({ key: false, book: false });
  const [keyPopup, setKeyPopup] = useState(false);

  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };
  console.log(inventory);
  return (
    <section className="game">
      <Room />
      <div>{inventory.key === false && <FirstKey pickUpKey={pickUpKey} />}</div>
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
    </section>
  );
}

export default Game;
