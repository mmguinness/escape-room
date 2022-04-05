import {React} from 'react';
import {useState} from 'react';

import myImage from "./keyimg.png";
export const FirstKey = () => {
  const [disable, setDisable] = useState(false);
  return <button className="firstKey" disabled={disable} onClick={() => 
   setDisable(true)}><img src={myImage} height="100" width="100"/>Collect Key</button>
};



