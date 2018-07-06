import React, { Component } from 'react';

import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head1: 'Hey, I\'m',
      head2: 'Axel Niklasson',
      sub1: 'M.Sc. Student',
      sub2: 'Full-stack developer',
      profilePicture: 'https://inneva.se/wp-content/uploads/2018/03/axel_profile_resized.jpg'
    };
  }

  render() {
    const { head1, head2, sub1, sub2, profilePicture } = this.state;

    return (
      <div className="header" id="header">
        <div className="container">
          <img src={profilePicture} alt="profile" />

          <div className="content">
            <h1>{head1} <span className="bold">{head2}</span></h1>
            <h2>{sub1}<br />{sub2}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
