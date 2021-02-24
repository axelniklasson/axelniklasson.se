import React from "react";

import Content from "../../components/Content";
import Spinner from "../../components/Spinner";
import Timeline from "../../components/Timeline";
import useContentfulClient from "../../hooks/useContentfulClient";
import "./style.scss";

const About = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    heading: "",
    content: "",
    timelineItems: [],
  });
  const client = useContentfulClient();

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "aboutSection",
        limit: 1,
      })
      .then((entries) => {
        const { heading, content } = entries.items[0].fields;

        client
          .getEntries({
            content_type: "timelineItem",
            order: "-fields.order",
          })
          .then((entries) => {
            setLoading(false);
            setData({
              heading,
              content,
              timelineItems: entries.items.map((el) => el.fields),
            });
          });
      });
  }, []);

  if (loading)
    return (
      <div className="about container">
        <Spinner />
      </div>
    );

  const { heading, content, timelineItems } = data;
  return (
    <div className="about container" id="about">
      <div className="content">
        <h2>{heading}</h2>
        <Content markdown={content} />
      </div>

      <div className="timeline-wrapper">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
};

export default About;
