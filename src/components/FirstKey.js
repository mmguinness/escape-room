import {React} from 'react';
import {useState} from 'react';
import myImage from '/Users/charlottebuchan/Projects/week-11-12/escape-room/src/key_img.png';
export const FirstKey = () => {
  const [disable, setDisable] = useState(false);
  return <button disabled={disable} onClick={() => 
   setDisable(true)}><img src={myImage} />Collect Key</button>
};



