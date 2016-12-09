import React, { Component } from 'react';
import { Link } from 'react-router';

// const PromptForm = (props) => {
  class QuoteItem extends Component {
    render() {
  return (
    <div>
      <p>Is it weird that I {this.props.content}?</p>

    </div>
    );
  }
}

export default QuoteItem;
