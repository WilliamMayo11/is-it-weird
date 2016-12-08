import React, { Component } from 'react';
import { Link } from 'react-router';
import Quote from '../Quote/Quote.jsx';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <Quote
          quote={this.props.quote}
        />
      </div>
    );
  }
}

export default Main;
