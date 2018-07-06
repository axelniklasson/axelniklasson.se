import React, { Component } from "react";
import { createClient } from "contentful";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Experience from "./containers/Experience";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Divider from "./components/Divider";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavbar: false,
      client: createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
      })
    };

    this.header = React.createRef();
  }

  throttle = (fn, wait) => {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  updateNav = () => {
    const offset = window.pageYOffset;
    this.setState({
      showNavbar: offset >= this.headerHeight
    });
  }

  componentDidMount() {
    this.headerHeight = document.getElementsByClassName('header')[0].clientHeight;
    this.updateNav();
    window.addEventListener('scroll', this.throttle(this.updateNav, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { showNavbar, client } = this.state;

    return (
      <div className="app">
        <Navbar showNavbar={showNavbar} />
        <Header ref={this.header} />

        <About client={client} />

        <Divider
          bgColor='rgba(48,116,60,0.83)'
          title="<Portfolio />"
          subtitle="Selected personal projects"
        /> 

        <Portfolio client={client} />

        <Divider
          bgColor='rgba(179,129,19,0.83)'
          title="<Experience />"
          subtitle="Things I have done so far"
        /> 

        <Experience />
      </div>
    );
  }
}

export default App;