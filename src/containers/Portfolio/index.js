import React from 'react';

import PortfolioItem from '../../components/PortfolioItem';
import Spinner from '../../components/Spinner';
import useContentfulClient from '../../hooks/useContentfulClient';
import './style.scss';

const Portfolio = () => {
  const [loading, setLoading] = React.useState(true);
  const [portfolio, setPortfolio] = React.useState([]);
  const client = useContentfulClient();

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'portfolioItem',
        order: 'fields.order',
      })
      .then((entries) => {
        setLoading(false);
        setPortfolio(entries.items.map((el) => el.fields));
      });
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
