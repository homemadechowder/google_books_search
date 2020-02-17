import React, { Component } from "react";
import "../../App.css";
import Nav from "../Nav";
import Header from "../Header";
import Card from "../Card";
import CardList from "../CardList";


function Saved() {
  return (
      <div className="saved-results">
        <h4 style={{paddingTop: 5, paddingLeft: 5}}>Saved Books</h4>
        {/* <Button onClick={this.onFormSubmit} /> */}
        <div className="card-dis">
          {this.state.books.length ? (
            <CardList>
              {this.state.books.map(book => (
                <div>
                  <Card description={book.volumeInfo.description} image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"} title={book.volumeInfo.title} authors={book.volumeInfo.authors} />
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


export default Saved;
