import React, { Component } from 'react';
import QuoteItem from '../QuoteItem/QuoteItem.jsx';

class QuoteList extends Component {

  // componentWillMount() {
  //   this.props.getAllQuotes;
  // }

  renderQuotes() {
    return this.props.quotes.map((quote, i) =>
      <QuoteItem
        key={i}
        content={quote.content}
        comment={this.props.comment}
        updateFormComment={this.props.updateFormComment.bind(this)}
       />
    );
  }

// {this.renderQuotes()}

  render() {
    return(
      <div>
        <div>
          {this.renderQuotes()}
        </div>
      </div>
    )
  }

}

export default QuoteList;
