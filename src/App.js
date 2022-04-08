import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import { KeyPopupBox } from "./components/KeyPopupBox";
import "./App.css";
import { Room } from "./components/Room";
import {GreetingPage} from "./GreetingPage"
function Game() {

  const [inventory, setInventory] = useState({ key: false, book: false });
  const [keyPopup, setKeyPopup] = useState(false);
  const [page, setPage] = useState('GreetingPage')
  
  const pickUpKey = () => {
    setInventory({ ...inventory, key: true });
    setKeyPopup(!keyPopup);
  };
  console.log(inventory);
  
  return (
    <div className="game">
      {page === "Room" && <Room/>}
      {page === "GreetingPage" && <GreetingPage greetingFn={() => setPage('Room')}/>}
      <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
      {keyPopup && <KeyPopupBox handleCloseBox={pickUpKey} />}
    </div>
  );
}

export default Game;
