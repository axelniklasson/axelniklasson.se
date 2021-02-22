import React from "react";

import LinkedIn from "../../images/linkedin.svg";
import GitHub from "../../images/github.svg";

import "./style.scss";

const LINKEDIN_URL = "https://linkedin.com/in/axelniklasson";
const GITHUB_URL = "https://github.com/axelniklasson";

const SocialItem = ({ icon, text, link }) => (
  <div className="social-item" onClick={() => window.open(link, "_blank")}>
    <img src={icon} alt={text} />
    <p>{text}</p>
  </div>
);

const Social = () => {
  return (
    <div className="social">
      <h2>Find me on the Internet</h2>
      <SocialItem icon={LinkedIn} text="LinkedIn" link={LINKEDIN_URL} />
      <SocialItem icon={GitHub} text="GitHub" link={GITHUB_URL} />
    </div>
  );
};

export default Social;
