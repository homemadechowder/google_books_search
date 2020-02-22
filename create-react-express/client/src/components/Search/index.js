import React, { Component } from "react";
import "../../App.css";
import Card from "../Card";
import CardList from "../CardList";
import {Form, Button} from "../Form";
import {Footer} from "../Footer";
import API from "../../scripts/api";

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
      synopsis: ''
       
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

  printState(event){
        event.preventDefault();
        console.log(this.state);
  }
  
  render(){
    return( 
      <div style = {background}>
        <p style = {textStyles}><strong>Searching for: {this.state.searchParams}</strong></p>
        <Form       
            name = "searchParams"
            placeHolder = "Harry Potter"
            value = {this.state.searchParams}
            onChange = {this.handleInputChange}
        />
        <Button
            onClick = {this.onFormSubmit}
        />
        <div>
          {this.state.books.length ? (
             <CardList>
              {this.state.books.map((book, i) => (
                  <div>
                    <Card link = {book.volumeInfo.previewLink} image = {book.volumeInfo.imageLinks === undefined ? "https://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png": `${book.volumeInfo.imageLinks.thumbnail}`} title = {book.volumeInfo.title} authors = {book.volumeInfo.authors}/>
                  </div>                  
              ))}
            </CardList>
          ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
      <Footer/>
      </div>
      )}    
}


export default Search;
