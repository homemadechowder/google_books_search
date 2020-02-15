import React, { Component } from "react";
import "../../App.css";
import Card from "../Card";
import CardList from "../CardList";
import API from "../../scripts/api";
import Button from "../Button";


class Search extends Component {
  state = {
      search: '',
      books: [],
      title: '',
      authors: '', 
      synopsis: ''
       
    }


  componentDidMount(){
        this.searchBook("Harry potter");
        console.log(this.state.books);
  }

  searchBook(query){
        API.getBook(query)
           .then(res => this.setState({books: res.data.items}))
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
        this.searchBook('Harry potter');
        this.printState(event);
  }

  printState(event){
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.books[0].volumeInfo.imageLinks.thumbnail);
  }
  
  render(){
    return( 
      <div>
        <Button onClick = {this.onFormSubmit} />
      <div>
          {this.state.books.length ? (
             <CardList>
              {this.state.books.map(book => (
                  <div>
                    <Card image = {'https://i.imgflip.com/prj6o.jpg'}title = {book.volumeInfo.title} authors = {book.volumeInfo.authors}/>
                  </div>                  
              ))}
            </CardList>
          ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
      </div>
      )}    
}


export default Search;
