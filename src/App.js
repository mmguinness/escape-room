import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import "./App.css";

import { Room } from "./components/Room";

function Game() {
    const [inventory, setInventory] = useState({ key: false, book: false });

  const pickUpKey = () => {
    setInventory({...inventory, key: true});
  };
  return (
    <section className="game">
      <Room />
      <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
    </section>
  );
}

export default Game;
