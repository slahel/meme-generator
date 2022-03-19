import React from "react";
import "./Meme.css";

export default function Meme() {
  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
        />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
