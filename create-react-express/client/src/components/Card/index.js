import React from "react";
import Radium from "radium";

const cardStyle = {
  base:{
    backgroundImage: "url('https://i7.pngguru.com/preview/219/171/634/nappa-leather-goatskin-suede-leather.jpg')",
    marginTop: '1%',
    marginLeft: '.5%',
    marginRight: '.5%',
    marginBottom: '3%',
    height: '80vh',
    width: '15vw',
    float: 'left',
    border: '8px solid #17212C',
    transition: 'all 0.3s',
    ':hover': {
      transform: "translate(0px, -20px)"
    }
  }
}

const imgStyle = {
  base:{
    width: '100%',
    height: '44vh',
    objectFit: 'cover'
  }
}

const textStyle = {
  fontFamily: 'Trade Winds',
  color: 'gold'
}


function Card({
   link,
   image,
   title,
   authors
  }) {
  return (
          <a href = {link} target="_blank" style = {cardStyle.base} className="card">
            <img style = {imgStyle.base} className="card-img-top" src={image} alt="CardImage"></img>
            <div className = "card-body">
              <h5 style = {textStyle} className = "card-title">{title}</h5>  
              <p  style = {textStyle} className = "card-text">{authors}</p>
            </div>
          </a>
  )
}
export default Radium(Card);
