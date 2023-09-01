import React from "react";

import Book from "./Book";

export default function Booklist({ booklist }) {
  //function to get the book

  return (
    <section style={{ display: "flex" }}>
      {booklist.map((book) => (
        <Book
          bookname={book.bookname}
          author={book.author}
          id={book.id}
          displayBook={(id) => {
            const book = booklist.find((book) => book.id === id);
            console.log(book);
          }}
        />
      ))}
    </section>
  );
}
