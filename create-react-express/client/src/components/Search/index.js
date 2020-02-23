import React, { Component } from "react";
import "../../App.css";
import Card from "../Card";
import CardList from "../CardList";
import {Form, Button} from "../Form";
import {Footer} from "../Footer";
import API from "../../scripts/api";
import Button from "../Button";
import SearchInput from "../SearchInput";
import Footer from "../Footer";

const background = {
  backgroundImage: "url('https://i.imgur.com/UP2Hz0a.jpg')",
  backgroundSize: 'cover',
  color: 'white'
}

const background = {
  backgroundImage: "url('https://i.imgur.com/UP2Hz0a.jpg')",
  backgroundSize: 'cover'
}

const textStyles = {
  textAlign: 'center',
  fontFamily: 'Merriweather',
  fontSize: '200%', 
  height: '120%',
  color: 'white',
  backgroundImage: "url('https://image.freepik.com/free-photo/old-wooden-texture-background-vintage_55716-1138.jpg')",
  border: '5px solid black'
}

class Search extends Component {
  state = {
      searchParams: "",
      books: [],
      image: '',  
      title: '',
      authors: '',
      description: ''
  }


  componentDidMount(){
        this.searchBook("Harry Potter");
        console.log(this.state.books);
  }
  
  searchBook(query){
        API.getBook(query)
           .then(res => 
            this.setState({books: res.data.items}))
           .catch(err => console.log(err))
  }

  handleInputChange = event =>{
        
        const {value, name} = event.target;
        this.setState({
            [name]:value
        })
  }

  onFormSubmit = event =>{
        event.preventDefault();
        this.searchBook(this.state.searchParams);
        this.printState(event);
  }

  render() {
    return (
      <>
      <div style = {background}>
      <SearchInput cb={this.searchBook}/>
      <div className="search-results">
        <h4 style={{paddingTop: 5, paddingLeft: 5}}>Results</h4>
        <div className="card-dis">
          {this.state.books.length ? (
            <CardList>
              {this.state.books.map(book => (
                <div>
                  <Card bid={book.id} link={book.volumeInfo.previewLink} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"} title={book.volumeInfo.title} authors={book.volumeInfo.authors} />
                </div>
              ))}
            </CardList>
          ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
      <Footer />
      </div>
      </>
    )
  }

}


export default Search;
