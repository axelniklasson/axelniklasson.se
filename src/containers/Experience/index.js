import React, { Component } from "react";
import Content from "../../components/Content";
import Spinner from "../../components/Spinner";
import ExperienceTimeline from "../../components/ExperienceTimeline";

import "./style.scss";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: '',
      content: '',
      experienceItems: [] 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    this.props.client.getEntries({
      content_type: 'experienceSection',
      limit: 1
    }).then(entries => {
      const { heading, content } = entries.items[0].fields;

      this.props.client.getEntries({
        content_type: 'experienceItem',
        order: '-fields.order'
      }).then(entries => {
        this.setState({
          isLoading: false,
          heading,
          content,
          experienceItems: entries.items.map(el => ({
            ...el.fields,
            employerLogo: el.fields.employerLogo.fields.file.url
          }))
        });
      })
    })
  }
  
  render() {
    const { isLoading, heading, content, experienceItems } = this.state;

    if (isLoading) return <Spinner />;

    return (
      <div className="experience container">
        <div className="content">
          <h2>{heading}</h2>
          <Content markdown={content} />
        </div>

        <ExperienceTimeline items={experienceItems} />
      </div>
    );
  }
}

export default Experience;