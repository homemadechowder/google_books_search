import React, {Component} from "react";

const cardStyle = {
  width: '100px',
  height: '100px'
}
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    return <div className="card">

      <div className="card-body">
        <h5 class="card-title">{this.props.title}</h5>
        <button type="submit" className="search-button btn btn-primary ">Save</button>
        <button type="submit" className="search-button btn btn-primary mr-3" onClick={()=>{window.location.href=this.props.link}}>View</button>
        <p class="card-text">{(this.props.authors) ? this.props.authors.map((author) => (author + " ")) : ""}</p>
      </div>
      <div>       
        <img style={cardStyle} class="card-img-top" src={this.props.image} alt="CardImage"></img>
        <p>{this.props.description}</p>
      </div>
    </div>
  }
}
export default Card;
