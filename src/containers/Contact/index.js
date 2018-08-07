import React, { Component } from 'react';
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";
import { Button } from "./Button";

import "./style.scss";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: '',
      content: '',
      isLoading: false,
      form: {
        email: '',
        message: ''
      },
      sendingMessage: false
    };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });

    this.props.client.getEntries({
      content_type: 'contactSection',
      limit: 1
    }).then(entries => {
      const { heading, content } = entries.items[0].fields;
      this.setState({
        heading,
        content,
        isLoading: false
      })
    })
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
    }))
  }

  onSubmit = e => {
    e.preventDefault();

    this.setState({ sendingMessage: true}, () => {
      setTimeout(() => {
        this.setState({ 
          sendingMessage: false,
          form: {
            email: '',
            message: ''
          }
        }, () => this.showSuccessMessage());
      }, 3000);
    });
  }

  showSuccessMessage = () => {
    this.setState({ showSuccessMessage: true}, () => {
      setTimeout(() => this.setState({ showSuccessMessage: false}), 3000);
    });
  }
  
  render() {
    const { heading, content, isLoading, form, showSuccessMessage, sendingMessage } = this.state;

    if (isLoading) return <Spinner />;

    return (
      <div className="contact container" id="contact">
        <h2>{heading}</h2>
        <Content markdown={content} />

        <form onSubmit={this.onSubmit}>
          <input 
            onChange={this.onChange}
            type="email"
            name="email"
            placeholder="john@doe.com"
            value={form.email} 
            required
          />
          <textarea 
            onChange={this.onChange}
            name="message"
            placeholder="Hi Axel, sweet website!"
            value={form.message}
            rows="10"
            required
          />

          <Button
            type="submit"
            isLoading={sendingMessage}
            loadingText="Sending message"
            text="Send message"
          />

          {showSuccessMessage && <p>Message not sent! need to build the backend for this. Damn it.</p>}
        </form>
      </div>
    );
  }
}

export default Contact;