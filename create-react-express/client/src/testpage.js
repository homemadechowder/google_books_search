import React, { Component } from 'react';
import API from '../../scripts/api';


class Search extends Component{

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
            {this.state.books.length ? (
               <div>
                {this.state.books.map(volumeInfo => (
                    <div>
                      <strong>
                        {volumeInfo.title} by {volumeInfo.authors}
                      </strong>
                    </div>                 
                ))}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
        )}    
    
}

export default Search;
