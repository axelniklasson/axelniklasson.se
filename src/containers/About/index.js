import React, { Component } from "react";
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";

import "./style.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      heading: '',
      content: ''
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.client.getEntries({
      content_type: 'aboutSection',
      limit: 1
    }).then(entries => {
      const { heading, content } = entries.items[0].fields;

      this.setState({
        isLoading: false,
        heading,
        content
      });
    })
  }
  
  render() {
    const { isLoading, heading, content } = this.state;

    if (isLoading) {
      return <Spinner />; 
    }

    return (
      <div className="about container" id="about">
        <div className="content">
          <h2>{heading}</h2>
          <Content markdown={content} />
        </div>

        <div className="timeline"></div>
      </div>
    );
  }
}

export default About;
