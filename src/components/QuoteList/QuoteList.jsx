import React, { Component } from 'react';
import QuoteItem from '../QuoteItem/QuoteItem.jsx';
import style from './QuoteList.css';

class QuoteList extends Component {

  // componentWillMount() {
  //   this.props.getAllQuotes;
  // }

  renderQuotes() {
    return this.props.quotes.map((quote, i) => {
      const commentsForQuote = this.props.comments.filter(comment => comment.quote_id === quote.id);
      console.log(commentsForQuote);
      return (
        <QuoteItem
          key={i}
          id={quote.id}
          content={quote.content}
          comment={this.props.comment}
          commentsForQuote={commentsForQuote}
          quote_id={this.props.quote_id}
          updateFormComment={this.props.updateFormComment.bind(this)}
          handleCommentSubmit={this.props.handleCommentSubmit.bind(this)}
         />
       )
    }

    );
  }

// updateQuoteId={this.props.updateQuoteId.bind(this)}

  render() {
    return(
      <div className={style['all-quotes']}>
        <div className={style['subtitle-flex']}>
          <h3 className={style['subtitle']}>Today's Weird Posts</h3>
          <div className={style['scroll-flex']}>
            <img src="http://i.imgur.com/wUiyXfi.png" alt="#" className={style['check-mark']}/>
            <p className={style['scroll-p']}>scroll</p>
          </div>
        </div>
        <div className={style['quote-container']}>
          {this.renderQuotes()}
        </div>
      </div>
    )
  }

}

export default QuoteList;
