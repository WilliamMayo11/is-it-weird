import React, { Component } from 'react';
import { Link } from 'react-router';

// const PromptForm = (props) => {
  class Quote extends Component {
    render() {
  return (
    <div>
    <p>Quote Component</p>
      <h3>{this.props.quote}</h3>
    </div>
    );
  }
}

export default Quote;
