import React, { Component } from 'react';
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";
import { Button } from "./Button";
import axios from "axios";

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
      sendingMessage: false,
      showSuccessMessage: false,
      showErrorMessage: false
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

    this.setState({ sendingMessage: true }, () => {
      const payload = {
        from: this.state.form.email,
        to: 'hello@axelniklasson.se',
        subject: '[axelniklasson.se] New message',
        text: this.state.form.message
      };

      axios.post('https://mailman.axelniklasson.se/send', payload, {
        headers: { 'Token': process.env.REACT_APP_MAILMAN_TOKEN }
      })
      .then(res => this.showStatusMessage(true))
      .catch(res => this.showStatusMessage(false))
    });
  }

  showStatusMessage = success => {
    this.setState({
      showSuccessMessage: success,
      showErrorMessage: !success,
      sendingMessage: false,
      form: {
        email: '',
        message: ''
      }
    }, () => {
      setTimeout(() => this.setState({
        showSuccessMessage: false,
        showErrorMessage: false
      }), 3000);
    });
  }

  render() {
    const { heading, content, isLoading, form, showSuccessMessage, showErrorMessage, sendingMessage } = this.state;

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

          {showSuccessMessage && <p>Message sent! I'll get back to you as soon as possible.</p>}
          {showErrorMessage && <p>Something went wrong. Please email me at hello@axelniklasson.se instead!</p>}
        </form>
      </div>
    );
  }
}

export default Contact;