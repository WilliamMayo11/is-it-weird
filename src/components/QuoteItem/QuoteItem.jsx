import React, { Component } from 'react';
import { Link } from 'react-router';

// const PromptForm = (props) => {
  class QuoteItem extends Component {
    render() {
  return (
    <div>
      <h3>Is it weird that I {this.props.content}?</h3>
      <p>Comment on this:</p>
      <form>
        <input type="text" value={this.props.comment} onChange={(event) => this.props.updateFormComment(event)} />

      </form>

    </div>
    );
  }
}

export default QuoteItem;
