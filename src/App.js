import React, { Component } from 'react';
import './App.css';
import Home from "./components/home";
import Nav from "./components/nav";
import New from "./components/new";


class App extends Component {
  render() {
    return (
      <div className="body">
        <Nav />
        <New />
      </div>
    );
  }
}

export default App;
