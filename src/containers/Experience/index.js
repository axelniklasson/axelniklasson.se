import React from 'react';

import Content from '../../components/Content';
import ExperienceTimeline from '../../components/ExperienceTimeline';
import Spinner from '../../components/Spinner';
import useContentfulClient from '../../hooks/useContentfulClient';
import './style.scss';

const Experience = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    heading: '',
    content: '',
    experienceItems: [],
  });
  const client = useContentfulClient();

  React.useEffect(() => {
    async function fetchData() {
      const data = await client.getExperienceSection();
      setLoading(false);
      setData(data);
    }

    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="experience container">
      <div className="content">
        <h2>{data.heading}</h2>
        <Content markdown={data.content} />
      </div>

      <ExperienceTimeline items={data.experienceItems} />
    </div>
  );
};

export default Experience;
