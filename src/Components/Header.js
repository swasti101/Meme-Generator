import React from "react";
export default function Header() {
  return (
    <header className="header">
      <img
        className="header--img"
        alt="image_here"
        src="./images/Troll Face.png"
      />
      <h4 className="header--title">Meme Generator</h4>
      <p className="header--proj">React Course - project 4</p>
    </header>
  );
}
