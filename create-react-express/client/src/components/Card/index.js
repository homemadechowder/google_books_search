import React from "react";

function Card({
   title,
   authors
  }) {
  return <li className="list-group-item">{title} and {authors} </li>;
}
export default Card;
