import React, { Component } from "react";
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";
import Timeline from "../../components/Timeline";

import "./style.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      heading: '',
      content: '',
      timelineItems: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    this.props.client.getEntries({
      content_type: 'aboutSection',
      limit: 1
    }).then(entries => {
      const { heading, content } = entries.items[0].fields;

      this.props.client.getEntries({
        content_type: 'timelineItem',
        order: '-fields.order'
      }).then(entries => {
        this.setState({
          isLoading: false,
          heading,
          content,
          timelineItems: entries.items.map(el => el.fields)
        });
      })
    })
  }
  
  render() {
    const { isLoading, heading, content, timelineItems } = this.state;

    if (isLoading) return <div className="about container"><Spinner /></div>;

    return (
      <div className="about container" id={this.props.id ? this.props.id : 'about'}>
        <div className="content">
          <h2>{heading}</h2>
          <Content markdown={content} />
        </div>

        <div className="timeline-wrapper">
          <Timeline items={timelineItems} />
        </div>
      </div>
    );
  }
}

export default About;
