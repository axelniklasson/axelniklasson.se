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
    client
      .getEntries({
        content_type: 'experienceSection',
        limit: 1,
      })
      .then((entries) => {
        const { heading, content } = entries.items[0].fields;

        client
          .getEntries({
            content_type: 'experienceItem',
            order: '-fields.order',
          })
          .then((entries) => {
            setLoading(false);
            setData({
              heading,
              content,
              experienceItems: entries.items.map((el) => ({
                ...el.fields,
                employerLogo: el.fields.employerLogo.fields.file.url,
              })),
            });
          });
      });
  }, []);

  if (loading) return <Spinner />;

  const { heading, content, experienceItems } = data;
  return (
    <div className="experience container">
      <div className="content">
        <h2>{heading}</h2>
        <Content markdown={content} />
      </div>

      <ExperienceTimeline items={experienceItems} />
    </div>
  );
};

export default Experience;
