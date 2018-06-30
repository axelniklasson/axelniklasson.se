import React, { Component } from "react";

import PortfolioItem from "../../components/PortfolioItem";

import "./style.scss";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: [
        { title: 'WriterCMS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', link: 'https://axelniklasson.se' },
        { title: 'node-skanetrafiken', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', link: 'https://axelniklasson.se'},
        { title: 'ScubaLog', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', link: 'https://axelniklasson.se'},
      ]
    };
  }
  
  render() {
    const { portfolio } = this.state;

    return (
      <div className="portfolio container" id="portfolio">
        {portfolio.map((el,index) => 
          <PortfolioItem 
            key={index}
            {...el}
            alignLeft={index % 2 === 0}
          />
        )}
      </div>
    );
  }
}

export default Portfolio;