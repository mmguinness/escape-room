import { React } from "react";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

import "./App.css";
import { Room } from "./components/Room";
import {GreetingPage} from "./GreetingPage"
function Game() {

  

  const [page, setPage] = useState('GreetingPage')
  const THIRTY_MINS = 30 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const TimeAfterThirtyMinutes = NOW_IN_MS + THIRTY_MINS;
  return (
    <div className="game">
      {page === "Room" && <Room/> }
      {page === "Room" &&  <CountdownTimer targetDate={TimeAfterThirtyMinutes} />}
    
      {page === "GreetingPage" && <GreetingPage greetingFn={() => setPage('Room')}/>}
    </div>
  );
}

export default Game;
