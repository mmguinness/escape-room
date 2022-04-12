import React, { useState } from "react";
import { MonitorPopup } from "./MonitorPopup";
import { LoginPopup } from "./LoginPopup";
import "./monitor.css";

export const Monitor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [answer, setAnswer] = useState("");
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordReply, setPasswordReply] = useState("Enter Password")

  const handleChangeOne = eventOne => {
    setInputOne(eventOne.target.value.toLowerCase());
  };

  const handlePassword = eventPassword => {
    setPassword(eventPassword.target.value);
  };

  const handleChangeTwo = eventTwo => {
    const word0 = eventTwo.target.value.toLowerCase();
    const word2 = word0.charAt(0).toUpperCase() + word0.slice(1);
    setInputTwo(word2);
  };

  const checkInputs = () => {
    if (inputOne === "red" && inputTwo === "Violets") {
      setAnswer("Safe Pin: 1234");
    } else {
      setAnswer("Try again");
    }
  };

  const toggleMonitorPopup = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleLoginPopup = () => {
    setLogin(!login)
  }

  const passwordChecker = () => {
    if (password === "code") {
      toggleLoginPopup()
      toggleMonitorPopup()
    } else {
       setPasswordReply("Incorrect Password, Try Again")
    }
  }
  return (
    <article>
      <img
        onClick={toggleLoginPopup}
        role="button"
        className="monitor"
        src="monitor.png"
        alt=""
      />
      {login && (
        <LoginPopup
        loginClose={toggleLoginPopup}
        content={
          <div>
            <h3 className="login-box">{passwordReply}</h3>
            <input
                  className="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                ></input>
            <button className="passwordBtn" onClick={passwordChecker}>Enter</button>
          </div>
        }/>
       
      )}
      {isOpen && (
        <MonitorPopup
          handleClose={toggleMonitorPopup}
          content={
            <div className="roses-puzzle">
              <h3>Puzzle</h3>
              <div>
                Roses are{" "}
                <input
                  className="wordOne"
                  value={inputOne}
                  onChange={handleChangeOne}
                ></input>
                <br />
                <br />
                <input
                  className="wordTwo"
                  value={inputTwo}
                  onChange={handleChangeTwo}
                ></input>
                <nbsp /> are blue
                <br />
                <br />
                I love coding <br />
                <br />
                You should too!
                <br />
                <br />
                <button onClick={checkInputs}>Submit</button>
                {/* normal object variable can not be seen here for react.
                We had to create a state named answer to be able to pull it here */}
                <h3 className="pin">{answer}</h3>
              </div>
            </div>
          }
        />
      )}
    </article>
  );
};
