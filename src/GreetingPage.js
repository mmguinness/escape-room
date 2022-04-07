import './GreetingPage.css';
export const GreetingPage = (props) => {
  return <div className="greetings">
    <h1 className="welcome" align="center"> Get Me Out Of Here! </h1>
    <p className="game-explination">  You have no idea how but you've woken up in a strange room. No idea how or why. 
    However how you got there is irrelivant, it's how youget out that is the important part. 
    Following a series of clues, your aim is to escape before the timer runs out.
    What happens when the timer runs out? Who knows. all you know is 'get me out of here'. </p><br/>
    <button align="center"className="play-game" onClick={(props.greetingFn) } >Time To Escape!</button>

  </div>

}

