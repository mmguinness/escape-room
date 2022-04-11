
import './GreetingPage.css';

export const GreetingPage = (props) => {
  return <div className="greetings">
    <br/>
    <h1 className="welcome" align="center"> Get Me Out Of Here! </h1>
      <p className="game-explanation">You awake in a strange room, with no memory of how or why. 
      Using your investigative skills, you must search for clues and solve a series of puzzles to 
      escape before the timer runs out!
      </p>
    <button className="play-game" onClick={(props.greetingFn)}>Time To Escape!</button>
  </div>
}

