import React, { Component } from "react";
import "../../App.css";
import Card from "../Card";
import CardList from "../CardList";
import SavedCard from "../SaveCard";
import $ from 'jquery';


class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    this.getSavedBooks(this);
  }
  
  getSavedBooks = (some) => {
    $.get("/books",
    function(res, err){
      console.log("fetched from db" + res);
      some.setState({books:res});
    });
  }

  render() {
    return (
      <div className="saved-results">
        <h4 style={{ paddingTop: 5, paddingLeft: 5 }}>Saved Books</h4>
        <div className="card-dis">
          {this.state.books.length ? (
            <CardList>
              {this.state.books.map(book => (
                <div>
                  <SavedCard description={book.description} image={book.image} title={book.title} authors={book.authors} link={book.link} id={book._id}/>
                </div>
              ))}
            </CardList>
          ) : (
              <h3>No Saved books to Display</h3>
            )}
        </div>
      </div>
    );
  }
}

export default Saved;
