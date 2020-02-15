import React from "react";

function Header({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="header"
    >
      <h1>(React) Google Book Search</h1>
      <h4> Search for and save books of interest</h4>
    </div>
  );
}

export default Header;
