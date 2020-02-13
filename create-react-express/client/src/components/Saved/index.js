import React, { Component } from "react";
import "../../App.css";
import Nav from "../Nav";
import Header from "../Header";
import Card from "../Card";
import CardList from "../CardList";


class Saved extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      image: "",
      description: ""
    };
    componentDidMount() {
        this.loadBooks();
      }
      loadBooks = () => {
        // API.getBooks()
        //   .then(res =>
        //     this.setState({ books: res.data, title: "", author: "", description: "" , image: ""})
        //   )
        //   .catch(err => console.log(err));
      };
    render(){
        return (
            <div>
            
            {this.state.books.length ? (
              <CardList>
                {this.state.books.map(book => (
                  <Card key={book._id}>
                    
                    <h3>{book.title}</h3>
                    <h5>Written by {book.author}</h5>  
                      
                    <img src=""/>
                    <p>{book.description}</p>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </Card>
                ))}
              </CardList>
            ) : (
              <h3>No Results to Display</h3>
            )}
                
           
            </div>
        );
    }
  
}



export default Saved;
