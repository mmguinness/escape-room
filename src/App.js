import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import "./App.css";
import { Room } from "./components/Room";
import {GreetingPage} from "./GreetingPage"
function Game() {
  const [page, setPage] = useState('GreetingPage')
  const [inventory, setInventory] = useState({ key: false, book: false });
  const pickUpKey = () => {
    setInventory({...inventory, key: true});
  };
  return (
    <div className="game">
      {page === "Room" && <Room/>}
      {page === "GreetingPage" && <GreetingPage greetingFn={() => setPage('Room')}/>}
      <Room />
    <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
</div>
  );
}

export default Game;
