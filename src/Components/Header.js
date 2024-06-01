import React from "react";
export default function Header() {
  return (
    <header className="header">
      <img
        className="header--img"
        alt="image_here"
        src="./images/Troll Face.png"
      />
      <h4 className="header--title">MemeRush</h4>
      <p className="header--proj">Create your own memes!!</p>
    </header>
  );
}
