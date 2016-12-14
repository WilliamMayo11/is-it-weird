import React, { Component } from 'react';
import CommentItem from '../CommentItem/CommentItem.jsx';
import { Link } from 'react-router';
import style from './QuoteItem.css';

// const PromptForm = (props) => {
  class QuoteItem extends Component {

    renderComments() {
      return this.props.commentsForQuote.reverse().map((comment, i) => {
        return (
            <CommentItem
              key={i}
              content={comment.content}
              num_of_likes={comment.num_of_likes}
              id={comment.id}
            />
          );
      })
    }

  render() {

  return (
    <div className={style['quote-container']}>
      <h3 className={style['prompt']}>"Is it weird that I {this.props.content}?"</h3>
      <p>Comment on this:</p>
      <form>
        <input type="text" value={this.props.comment} onfocus={"this.value"} id={this.props.id} onChange={(event) => this.props.updateFormComment(event)} />
        <button onClick={(event) => this.props.handleCommentSubmit(event)} >Submit</button>
      </form>
      <div>
        {this.renderComments()}
      </div>
    </div>
    );
  }
}

export default QuoteItem;


