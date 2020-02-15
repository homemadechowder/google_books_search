import React from "react";

const cardStyle = {
  width: '20vw',
  height: '20vh'
}

function Card({
   image,
   title,
   authors
  }) {
  return <div className="card">
            <img style = {cardStyle} class="card-img-top" src={image} alt="CardImage"></img>
            <div className = "card-body">
              <h5 class = "card-title">{title}</h5>  
              <p class = "card-text">{authors}</p>
            </div>
          </div>
}
export default Card;
