import {React} from 'react'
import {useState} from 'react'
export const FirstKey = () => {
  const [disable, setDisable] = useState(false);
  return <button disabled={disable} onClick={() => setDisable(true)}> Get key</button>
};



