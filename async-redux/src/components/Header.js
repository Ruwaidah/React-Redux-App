import React from "react";
import Logo from "../logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} width="100px" />
      <h1>Pixabay</h1>
    </div>
  );
}
