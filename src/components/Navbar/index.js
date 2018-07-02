import React, { Component } from 'react';

import "./style.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerImage: 'https://inneva.se/wp-content/uploads/2018/03/axel_profile_resized.jpg',
      title: 'Axel Niklasson',
      dropdownVisible: false
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(this.props, newProps);
    if (this.props.showNavbar && !newProps.showNavbar) {
      this.className = 'navbar fadeOut';
    } else if (newProps.showNavbar) {
      this.className = 'navbar fadeIn';
    } else {
      this.className = 'navbar';
    }
  }

  toggleDropdown = () => this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }))

  render() {
    const { headerImage, title, dropdownVisible } = this.state;
    const { showNavbar } = this.props;

    return (
      <div className={this.className}>
        <div>
          <div>
            <img src={headerImage} alt="header" />
            <span className="hide-mobile">{title}</span>
          </div>
          <ul className={dropdownVisible ? 'expanded' : ''}>
            <li><a className="active" href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>

          <div
            className={dropdownVisible ? 'menuIcon toggled' : 'menuIcon'}
            onClick={this.toggleDropdown}
          >
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;