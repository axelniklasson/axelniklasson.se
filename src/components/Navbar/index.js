import React from "react";

import "./style.scss";

const TITLE = "Axel Niklasson";

export default function Navbar({ client, showNavbar }) {
  const [headerImage, setHeaderImage] = React.useState(
    "https://bit.ly/2Cfom2I"
  );
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [className, setClassName] = React.useState("navbar");
  const ref = React.createRef(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "headerSection",
        limit: 1,
      })
      .then((data) => {
        const profilePicture =
          data.items[0].fields.profilePicture.fields.file.url;
        setHeaderImage(profilePicture);
      });
  }, []);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function jump(id) {
    showDropdown(true);
    const el = document.getElementById(id);
    el.scrollIntoView();
    window.scrollBy(0, -ref.current.clientHeight);
  }

  // TODO migrate this to React.useEffect hook depending on showNavbar prop
  // componentWillReceiveProps(newProps) {
  //   if (this.props.showNavbar && !newProps.showNavbar) {
  //     this.className = "navbar fadeOut";
  //   } else if (newProps.showNavbar) {
  //     this.className = "navbar fadeIn";
  //   } else {
  //     this.className = "navbar";
  //   }
  // }

  const NavLink = ({ id, text }) => (
    <li>
      <a onClick={() => jump(id)}>{text}</a>
    </li>
  );

  return (
    <div className={className} ref={ref}>
      <div>
        <div>
          <img
            onClick={() => this.jump("header")}
            src={headerImage}
            alt="header"
          />
          <span className="hide-mobile">{TITLE}</span>
        </div>
        <div>
          <ul className={showDropdown ? "expanded" : ""}>
            <NavLink id="about" text="About" />
            <NavLink id="portfolio" text="Portfolio" />
            <NavLink id="experience" text="Experience" />
          </ul>

          <div
            className={showDropdown ? "menuIcon toggled" : "menuIcon"}
            onClick={toggleDropdown}
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
