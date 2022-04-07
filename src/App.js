import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import "./App.css";

function App() {

  const [inventory, setInventory] = useState({ key: false, book: false });

  const pickUpKey = () => {
    setInventory({...inventory, key: true});
  };

  return (
    <div>{(inventory.key === false) && <FirstKey pickUpKey={pickUpKey} />}</div>
  );
}

export default App;
