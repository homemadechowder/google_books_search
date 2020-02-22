import React from "react";
import Radium from "radium";
import $ from 'jquery';

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

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

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

 };
/*  }
  saveBook = (title,authors,description,image,link) =>{
    $.post("/books",
    {
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link,
    },
    function(res, err){
      console.log("saved to db");
    });
  }
  render() {

    return <div className="card">

      <div className="card-body">
        <h5 class="card-title">{this.props.title}</h5>
        <button type="submit" className="search-button btn btn-primary " onClick={()=>{this.saveBook(this.props.title,this.props.authors,this.props.description,this.props.image,this.props.link)}}>Save</button>
        <button type="submit" className="search-button btn btn-primary mr-3" onClick={()=>{window.location.href=this.props.link}}>View</button>
        <p class="card-text">{(this.props.authors) ? this.props.authors.map((author) => (author + " ")) : ""}</p>
      </div>
      <div>       
        <img style={cardStyle} class="card-img-top" src={this.props.image} alt="CardImage"></img>
        <p>{this.props.description}</p>
      </div>
    </div>
  }
*/
}
export default Radium(Card);
