import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Template from "./components/Template";
import Landing from "./components/Landing"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Template>
        <Route path="/" component={Landing}/>
        </Template>
      </BrowserRouter>
    );
  }
}

export default App;
