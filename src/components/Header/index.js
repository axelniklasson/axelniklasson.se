import React, { Component } from "react";

import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      head1: "Hey, I'm",
      head2: "Axel Niklasson",
      sub1: "M.Sc. Student",
      sub2: "Full-stack developer",
      profilePicture: "https://bit.ly/2Cfom2I",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    this.props.client
      .getEntries({
        content_type: "headerSection",
        limit: 1,
      })
      .then((data) => {
        const { head1, head2, sub1, sub2 } = data.items[0].fields;
        const profilePicture =
          data.items[0].fields.profilePicture.fields.file.url;

        this.setState({
          isLoading: false,
          head1,
          head2,
          sub1,
          sub2,
          profilePicture,
        });
      });
  }

  render() {
    const { isLoading, head1, head2, sub1, sub2, profilePicture } = this.state;
    if (isLoading) {
      return null;
    }

    return (
      <div className="header" id="header">
        <div className="container">
          <img src={profilePicture} alt="profile" />

          <div className="content">
            <h1>
              {head1} <span className="bold">{head2}</span>
            </h1>
            <h2>
              {sub1}
              <br />
              {sub2}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
