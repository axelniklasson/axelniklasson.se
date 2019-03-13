import React, { Component } from 'react';

import "./style.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerImage: 'https://bit.ly/2Cfom2I',
      title: 'Axel Niklasson',
      dropdownVisible: false
    };

    this.ref = React.createRef();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.showNavbar && !newProps.showNavbar) {
      this.className = 'navbar fadeOut';
    } else if (newProps.showNavbar) {
      this.className = 'navbar fadeIn';
    } else {
      this.className = 'navbar';
    }
  }

  toggleDropdown = () => this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }))

  jump = id => {
    this.setState({ dropdownVisible: false });
    const el = document.getElementById(id);
    el.scrollIntoView();
    window.scrollBy(0, -this.ref.current.clientHeight)
  }


  render() {
    const { headerImage, title, dropdownVisible } = this.state;
    const NavLink = ({id, text}) => <li><a onClick={() => this.jump(id)}>{text}</a></li>

    return (
      <div className={this.className} ref={this.ref}>
        <div>
          <div>
            <img onClick={() => this.jump('header')} src={headerImage} alt="header" />
            <span className="hide-mobile">{title}</span>
          </div>
          <div>
            <ul className={dropdownVisible ? 'expanded' : ''}>
              <NavLink id="about" text="About" />
              <NavLink id="portfolio" text="Portfolio" />
              <NavLink id="experience" text="Experience" />
              <NavLink id="contact" text="Contact" />
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
      </div>
    );
  }
}

export default Navbar;
