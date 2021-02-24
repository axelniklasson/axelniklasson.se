import React from "react";

import PortfolioItem from "../../components/PortfolioItem";
import Spinner from "../../components/Spinner";
import useContentfulClient from "../../hooks/useContentfulClient";
import "./style.scss";

const Portfolio = () => {
  const [loading, setLoading] = React.useState(true);
  const [portfolio, setPortfolio] = React.useState([]);
  const client = useContentfulClient();

  React.useEffect(async () => {
    const data = await client.getPortfolioSection();
    setLoading(false);
    setPortfolio(data);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="portfolio container">
      {portfolio.map((el, index) => (
        <PortfolioItem key={index} {...el} alignLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Portfolio;
