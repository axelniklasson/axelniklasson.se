import React, { Component } from "react";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Experience from "./containers/Experience";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Divider from "./components/Divider";
import Spinner from "./components/Spinner";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavbar: false
    };

    this.header = React.createRef();
  }

  throttle = (fn, wait) => {
    var time = Date.now();
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
      showNavbar: offset > this.headerHeight - 25
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
    const { showNavbar } = this.state;

    return (
      <div className="app">
        <Navbar showNavbar={showNavbar} />
        <Header ref={this.header} />

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

        <Experience />
      </div>
    );
  }
}

export default App;
