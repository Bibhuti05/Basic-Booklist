import "./styles.css";
import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Booklist from "./BookList";

// Defining a list of books.
export const initArray = [
  { bookname: "StepUp", author: "Harsh", id: 1 },
  { bookname: "BigBrains", author: "Atharva", id: 2 },
  { bookname: "TimeIsDummy", author: "Bibhuti", id: 3 },
  { bookname: "KeepMoving", author: "Parth", id: 4 }
];

export default function App() {
  var [booksarray, setBooksarray] = useState(initArray);

  function handleState(newValue) {
    setBooksarray(newValue);
  }

  return (
    <div className="App">
      <NavBar change={handleState} />
      <h1>Book List</h1>
      <Booklist booklist={booksarray} />
    </div>
  );
}
