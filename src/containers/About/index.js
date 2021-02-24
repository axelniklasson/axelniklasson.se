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

  React.useEffect(async () => {
    const data = await client.getAboutSection();
    setLoading(false);
    setData(data);
  }, []);

  if (loading)
    return (
      <div className="about container">
        <Spinner />
      </div>
    );

  return (
    <div className="about container" id="about">
      <div className="content">
        <h2>{data.heading}</h2>
        <Content markdown={data.content} />
      </div>

      <div className="timeline-wrapper">
        <Timeline items={data.timelineItems} />
      </div>
    </div>
  );
};

export default About;
