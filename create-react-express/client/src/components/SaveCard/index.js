import React from "react";

const cardStyle = {
  width: '100px',
  height: '100px'
}

function Card({
  image,
  title,
  authors,
  description
}) {
  return <div className="card">
    
    <div className="card-body">
      <h5 class="card-title">{title}</h5>
      <button type="submit" className="search-button btn btn-primary ">Delete</button>
      <button type="submit" className="search-button btn btn-primary mr-3">View</button>
      <p class="card-text">{(authors) ? authors.map((author) =>(author+" ")) : ""}</p>
    </div>
    <div>
        <img style={cardStyle} class="card-img-top" src={image} alt="CardImage"></img>
        <p>{description}</p>
    </div>
  </div>
}
export default Card;
