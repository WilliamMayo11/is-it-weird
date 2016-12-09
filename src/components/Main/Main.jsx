import React, { Component } from 'react';
import { Link } from 'react-router';
import QuoteList from '../QuoteList/QuoteList.jsx';

class Main extends Component {

  componentWillMount() {
    this.props.getAllQuotes();
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <QuoteList
          quote={this.props.quote}
          quotes={this.props.quotes}
          updateFormComment={this.props.updateFormComment.bind(this)}
        />
      </div>
    );
  }
}

export default Main;
