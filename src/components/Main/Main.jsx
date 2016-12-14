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
        <div className={style['main-flex']}>
          <div className={style['photos-flex-1']}>
            <div className={style['photos-1']}>
              <img className={style['cholera']} src="http://i.imgur.com/vq4NsOC.jpg"/>
              <img className={style['frame-2']} src="http://i.imgur.com/41uCthk.png"/>
            </div>
            <div className={style['videos-1']}>
            <iframe className={style['vid']} width="560" height="315" src="https://www.youtube.com/embed/HYxsCWHaXRA?autoplay=1" frameborder="0" allowfullscreen></iframe>
              <img className={style['tv']} src="http://i.imgur.com/bVDUL0c.png"/>
            </div>
          </div>
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
