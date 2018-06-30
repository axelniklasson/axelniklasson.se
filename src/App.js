import React, { Component } from "react";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Divider from "./components/Divider";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />

        <About />

        <Divider
          bgColor='rgba(48,116,60,0.83)'
          title="<Portfolio />"
          subtitle="Selected personal projects"
        /> 

        <Portfolio />

        <Divider
          bgColor='rgba(179,129,19,0.83)'
          title="<Experience />"
          subtitle="Things I have done so far"
        /> 
      </div>
    );
  }
}

export default App;
