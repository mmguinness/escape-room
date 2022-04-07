import "./App.css";
import { useState } from "react";
import { Room } from "./components/Room";
import {GreetingPage} from "./GreetingPage"
function Game() {
  const [page, setPage] = useState('GreetingPage')
  return (
    <div className="game">
      {page === "Room" && <Room/>}
      {page === "GreetingPage" && <GreetingPage/>}
     
    </div>
  );
}

export default Game;
