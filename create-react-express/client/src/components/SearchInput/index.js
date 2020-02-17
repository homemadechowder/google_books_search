import React from "react";

function SearchInput({ children }) {
  return (
    <div
      style={{ height: 175, clear: "both", paddingTop: 20, paddingLeft: 20, paddingRight:20}}
      className="search-input"
    >
      <h3> Book Search</h3>
      <h6> Book</h6>
      <input type="text" className="text" placeholder="Search for a book" />
      <button type="submit" className="search-button btn btn-primary">Search</button>
    </div>
  );
}

export default SearchInput;
