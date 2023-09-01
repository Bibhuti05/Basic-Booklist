import React from "react";
import { useState } from "react";

export default function Book({ bookname, author, id, displayBook }) {
  var [show, setShow] = useState(false);
  var [des, setDes] = useState(" ");

  function hc() {
    setShow(!show);
    setDes(
      show
        ? " "
        : "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived"
    );
    displayBook(id);
  }

  return (
    <div className="Book">
      <img
        src="https://marketplace.canva.com/EAFersXpW3g/1/0/1003w/canva-blue-and-white-modern-business-book-cover-cfxNJXYre8I.jpg"
        alt="Book cover"
      />
      <h2>{bookname}</h2>
      <p>{author}</p>
      <button
        style={{
          width: "40%",
          margin: "auto",
          padding: "10px",
          borderRadius: "8px",
          border: "0px",
          backgroundColor: "#232526",
          color: "white",
          fontFamily: "Poppins"
        }}
        onClick={hc}
      >
        {show ? "hide" : "Detail"}
      </button>
      <span className="number">{`# ${id}`}</span>
      <p>{des}</p>
    </div>
  );
}
