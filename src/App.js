import { React } from "react";
import { useState } from "react";
import { FirstKey } from "./components/FirstKey";
import "./App.css";

function App() {

  const [isVisible, setIsVisible] = useState(true);
  const toggleKey = () => {
    setIsVisible(!isVisible);
  };

  return <div>{isVisible && <FirstKey toggleKey={toggleKey} />}</div>;
}

export default App;
