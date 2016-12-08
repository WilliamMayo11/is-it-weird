import React, { Component } from 'react';
import { Link } from 'react-router';

// const PromptForm = (props) => {
  class PromptForm extends Component {
    render() {
  return (
    <div>
      <h1>Is it weird that I...</h1>
        <input type="text" value={this.props.quote} onChange={this.props.updateFormQuote} />
        <Link to="Main">
          <button>Submit</button>
        </Link>
    </div>
    );
  }
}

export default PromptForm;
