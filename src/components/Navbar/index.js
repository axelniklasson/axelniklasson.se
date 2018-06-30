import React, { Component } from 'react';

import "./style.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerImage: 'https://inneva.se/wp-content/uploads/2018/03/axel_profile_resized.jpg',
      title: 'Axel Niklasson'
    };
  }

  render() {
    const { headerImage, title } = this.state;

    return (
      <div className="navbar">
        <div>
          <div>
            <img src={headerImage} alt="header" />
            <span>{title}</span>
          </div>
          <ul className="links">
            <li><a className="active" href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;