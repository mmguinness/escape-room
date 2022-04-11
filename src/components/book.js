import React, { useState } from "react";
import { BookPopup } from "./bookPopup";
import "./book.css";

export const Book = (props) => {
  const [bookPopup, setBookPopup] = useState(false);

  const toggleBookPopup = () => {
    setBookPopup(!bookPopup);
  };
  return (
    <div>
      <img
        onClick={toggleBookPopup}
        role="button"
        className="book"
        src="books.png"
        alt=""
      />
      {bookPopup && (
        <BookPopup
          inventory={props.inventory}
          toggleBookPopup={toggleBookPopup}
          blankOne={props.blankOne}
          blankTwo={props.blankTwo}
          blankThree={props.blankThree}
        />
      )}
    </div>
  );
};
