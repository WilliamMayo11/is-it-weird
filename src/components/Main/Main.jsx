import React, { Component } from 'react';
import { Link } from 'react-router';
import QuoteList from '../QuoteList/QuoteList.jsx';
import BestOf from '../BestOf/BestOf.jsx';
import style from './Main.css';


class Main extends Component {

  componentDidMount() {
    this.props.getAllQuotes();
    this.props.getAllComments();
  }

          // <div>
          //   <BestOf />
          // </div>

  render() {
    return (
      <div>
        <div className={style['title-box']}>
          <h1 className={style['title']}>Is It Weird?</h1>
        </div>
        <div className={style["main-flex"]}>
          <div className={style["news-feed"]}>
            <QuoteList
              quote={this.props.quote}
              quotes={this.props.quotes}
              quote_id={this.props.quote_id}
              comments={this.props.comments}
              updateFormComment={this.props.updateFormComment.bind(this)}
              handleCommentSubmit={this.props.handleCommentSubmit.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;


// updateQuoteId={this.props.updateQuoteId.bind(this)}
