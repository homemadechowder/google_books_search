# Google Book Search

## Demo 
![Demo](demo.gif)

## Tech/Packaged Used:
[Express](https://expressjs.com/)- Used to setup development server
[React](https://reactjs.org/) - Used for structuring the webapp
[Axios](https://www.npmjs.com/package/axios) - Used for google book search API script
[Radium](https://www.npmjs.com/package/radium) - Used for hover css in react component


## Development/Design Process

We used this opportunity to practice a project flow with react. We setup a github project page with tickets so that each group member can take an item of their picking. We try to divide the project into parts where group members can work on different things in different branches without each item too dependent on each other. We separated this project into 3 primary parts in the beginning:

### React Components
The html/css part of this project we created multiple components and setting up react router so that the webpage correctly displays each item. We linked stylesheets in the index.html file. We haven't dug deep into the scripting part of each component (props) as much as later on, we used placeholders to test

#### Example of Card Design
Here are two functions defined in class Card:
```javascript
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
      alert(res.status)
    });
  }
```
As you can see, the above code infers the ajax post to save data into the db, this will be called in the render function as a prop

```javascript
render() {

    return (
      <div style={cardStyle.base} className="card" >
      <div className="card-front" id={'front' + this.props.bid } >
      <div className="card-image">       
          <img onClick={()=> {this.flipCard(this.props.bid)}} style = {imgStyle.base} className="card-img-top" src={this.props.image} alt="CardImage"></img>
        </div>
        <div className="card-body"  onClick={(ev)=> {if(ev.target.tagName != "BUTTON")this.flipCard(this.props.bid)}}>
          <h5 style = {textStyle} className="card-title">{this.props.title}</h5>
          <p style = {textStyle} className="card-text">{(this.props.authors) ? this.props.authors.map((author) => (author + " ")) : ""}</p>
          <button type="submit" className="search-button btn btn-primary " onClick={()=>{this.saveBook(this.props.title,this.props.authors,this.props.description,this.props.image,this.props.link)}}>Save</button>
          <button type="submit" className="search-button btn btn-primary mr-3" onClick={()=>{window.open(this.props.link, '_blank')}}>View</button>  
        </div>
      </div>
      <div className="card-back" id={'back' + this.props.bid } onClick={()=> {this.flipCard(this.props.bid)}} >
        <p className="card-description" >{this.props.description}</p>
      </div>
    </div>
    )
  }
```
We made this component highly modifiable with all the props defined. This is the render function we defined for card. The card component is later called in the Search page where the prop parameters are defined.



### API routes/MongoDB setup
Setting up db connection, installing dependencies and define api routes that we need. 

### API script testing with constructors in pages
Using google books as API we created a script file to import later in one of our components.

## How to Start

```
git clone <repo>

npm/yarn install 

npm/yarn start
```
Feel free to leave any feedbacks to this account at @homemadechowder!


