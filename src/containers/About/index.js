import React, { Component } from 'react';
import Spinner from "../../components/Spinner";

import "./style.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      heading: 'First, a little bit about me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    };
  }

  // simulate async call to contentful to render spinner for 1500ms
  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }
  
  render() {
    const { isLoading, heading, text } = this.state;

    if (isLoading) {
      return <Spinner />; 
    }

    return (
      <div className="about container" id="about">
        <div className="content">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>

        <div className="timeline"></div>
      </div>
    );
  }
}

export default About;
