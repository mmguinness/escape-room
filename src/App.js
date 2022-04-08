import { React } from "react";
import { useState } from "react";

import "./App.css";
import { Room } from "./components/Room";
import {GreetingPage} from "./GreetingPage"
function Game() {

  const [page, setPage] = useState('GreetingPage')
  
  return (
    <div className="game">
      {page === "Room" && <Room/>}
      {page === "GreetingPage" && <GreetingPage greetingFn={() => setPage('Room')}/>}
    </div>
  );
}

export default Game;
