import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Saved from "./components/Saved";
import Search from "./components/Search";

function App() {
  return (
    
      <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
   
  );
}


export default App;
