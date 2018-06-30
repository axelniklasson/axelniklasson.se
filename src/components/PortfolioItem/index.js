import React from "react";

import GitHubLogo from "./GitHubLogo";

import "./style.scss";

const PortfolioItem = ({ title, description, link, logo, alignLeft }) => {
  return (
    <div 
      className={alignLeft ? 'portfolioItem left' : 'portfolioItem'}
      onClick={() => window.open(link, '_blank')}
    >
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="cta">
        <GitHubLogo />

        <a href={link}>Source code</a>
      </div>
    </div>
  );
};



export default PortfolioItem;