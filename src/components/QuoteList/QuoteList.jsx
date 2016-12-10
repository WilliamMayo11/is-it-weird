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
        id={quote.id}
        content={quote.content}
        comment={this.props.comment}
        quote_id={this.props.quote_id}
        updateFormComment={this.props.updateFormComment.bind(this)}
        handleCommentSubmit={this.props.handleCommentSubmit.bind(this)}
       />
    );
  }

// updateQuoteId={this.props.updateQuoteId.bind(this)}

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
