import React, { Component } from "react";
import "../../App.css";
import Nav from "../Nav";
import Header from "../Header";
import Card from "../Card";
import CardList from "../CardList";
import API from "../../scripts/api";


class Search extends Component {
  state = {
        search: '',
        books: []
    }


    componentDidMount(){
        this.searchBook("Harry potter");
    }

    searchBook(query){
        API.getBook(query)
           .then(res => this.setState({books: res.data.items}))
           .catch(err => console.log(err))
    }

    

    handleInputChange(event){
        const {value, name} = event.target;

        this.setState({
            [name]:value
        })
    }

    onFormSubmit(event){
        event.preventDefault();
        this.searchBook(this.state.search);
    }
  
  
  
  render(){
    return(
      
      <div>
      <div>
          {this.state.books.length ? (
             <CardList>
              {this.state.books.map(volumeInfo => (
                  <div>
                    <Card title = 
                      {volumeInfo.title} authors =  {volumeInfo.authors}/>
                      <button onClick = {() => this.onFormSubmit()} />
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
