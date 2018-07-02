import React, { Component } from 'react';

import "./style.scss";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: 'Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    };
  }
  
  render() {
    const { heading, text } = this.state;

    return (
      <div className="experience container" id="experience">
        <div className="content">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default Experience;