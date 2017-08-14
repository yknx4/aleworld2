import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Template from "./components/Template";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Template>
         <h1> Placeholder </h1> 
        </Template>
      </BrowserRouter>
    );
  }
}

export default App;
