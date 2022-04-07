import './GreetingPage.css';
export const GreetingPage = (props) => {
  return <div className="greetings">
    <h1> Welcome to 'Get Me Out Of Here!'</h1>
    <p className="game-explination">  You have no idea how but you've woken up in a strange room. No idea how or why. 
    However how you got there is irrelivant, it's how youget out that is the important part. 
    Following a series of clues, your aim is to escape before the timer runs out.
    What happens when the timer runs out? Who knows. all you know is 'get me out of here'. </p><br/>
    <button className="play-game" onClick={(props.greetingFn) } >Get Me Out Of Here!</button>

  </div>
 /* import {React} from 'react';
  import {useState} from 'react';
  
  import myImage from "./keyimg.png";
  export const FirstKey = () => {
    const [disable, setDisable] = useState(false);
    return <button className="firstKey" disabled={disable} onClick={() => 
     setDisable(true)}><img src={myImage} height="100" width="100"/>Collect Key</button>
  }; */

}

// Set up view with description
// Start button to bring you to game
// As a user, So I know what type of game I'm playing I want to see an description page with a start button