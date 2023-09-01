import { useState } from "react";
import { initArray } from "./App";

export default function NavBar({ change }) {
  const [message, setMessage] = useState("");

  function hic(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }
  function hcs() {
    if (message === "") {
      change(initArray);
    }

    for (var i = 0; i < initArray.length; i++) {
      let test = message.toLocaleLowerCase().replace(/\s/g, "");

      if (
        initArray[i].bookname
          .toLocaleLowerCase()
          .replace(/\s/g, "")
          .includes(test)
      ) {
        console.log(initArray[i]);
        console.log(
          initArray[i].bookname.toLocaleLowerCase().replace(/\s/g, "")
        );
        change([initArray[i]]);
        break;
      }
    }
  }

  function gth() {
    change(initArray);
  }

  return (
    <div className="navbar">
      <button
        style={{
          padding: "15px",
          borderRadius: "8px",
          border: "0px",
          color: "white",
          fontFamily: "Poppins"
        }}
        className="btn"
        onClick={gth}
      >
        Home
      </button>
      <input
        style={{ margin: "10px" }}
        name={"product"}
        onChange={(e) => hic(e)}
        className="inputf"
      />
      <button
        className="btn"
        onClick={hcs}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "0px",
          color: "white",
          fontFamily: "Poppins"
        }}
      >
        search for book.
      </button>
    </div>
  );
}
