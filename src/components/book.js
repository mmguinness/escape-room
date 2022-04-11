import React, { useState } from "react";
import { BookPopup } from "./bookPopup";
import "./book.css";

export const Book = () => {
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
      {bookPopup && <BookPopup toggleBookPopup={toggleBookPopup} />}
    </div>
  );
};
