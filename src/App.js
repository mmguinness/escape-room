import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import "./App.css";

import { Room } from "./components/Room";

function Game() {
    const [inventory, setInventory] = useState({ key: false, book: false });
    const [keyPopup, setKeyPopup] = useState(false);

  const pickUpKey = () => {
    setInventory({...inventory, key: true});
    setKeyPopup(!keyPopup);
  };
  
  return (
    <section className="game">
      <Room />
      <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
      {keyPopup && (
        <KeyPopupBox 
          handleCloseBox={setKeyPopup}
          content={
            <div>
              <h3>You picked up a key!</h3>
            </div>
          }
        />
      )}
    </section>
  );
}

export default Game;
