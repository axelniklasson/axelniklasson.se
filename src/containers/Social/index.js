import React from 'react';

import LinkedIn from "../../images/linkedin.svg";
import GitHub from "../../images/github.svg";
import Code from "../../images/code.svg";

import "./style.scss";

const LINKED_IN_URL = "https://linkedin.com/in/axelniklasson";
const GITHUB_URL = "https://github.com/axelniklasson";
const API_URL = "https://api.axelniklasson.se";

const SocialItem = ({ icon, text, link }) => (
  <div className="social-item">
    <img 
      src={icon}
      alt={text}
      onClick={() => window.open(link, '_blank')}
    />
    <p>{text}</p>
  </div>
);

const Social = () => {
  return (
    <div className="social">
      <h2>Find me on the Internet</h2>
      <SocialItem icon={LinkedIn} text="LinkedIn" link={LINKED_IN_URL} />
      <SocialItem icon={GitHub} text="GitHub" link={GITHUB_URL} />
      <SocialItem icon={Code} text="API" link={API_URL} />
    </div>
  );
};

export default Social;