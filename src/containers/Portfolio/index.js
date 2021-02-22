import React, { Component } from "react";
import Spinner from "../../components/Spinner";
import PortfolioItem from "../../components/PortfolioItem";

import "./style.scss";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      portfolio: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.client
      .getEntries({
        content_type: "portfolioItem",
        order: "fields.order",
      })
      .then((entries) => {
        this.setState({
          isLoading: false,
          portfolio: entries.items.map((el) => el.fields),
        });
      });
  }

  render() {
    const { isLoading, portfolio } = this.state;

    if (isLoading) return <Spinner />;

    return (
      <div className="portfolio container">
        {portfolio.map((el, index) => (
          <PortfolioItem key={index} {...el} alignLeft={index % 2 === 0} />
        ))}
      </div>
    );
  }
}

export default Portfolio;
