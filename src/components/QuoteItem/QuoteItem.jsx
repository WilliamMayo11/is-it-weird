import React, { Component } from 'react';
import CommentItem from '../CommentItem/CommentItem.jsx';
import { Link } from 'react-router';

// const PromptForm = (props) => {
  class QuoteItem extends Component {

    renderComments() {
      return this.props.commentsForQuote.map((comment, i) => {
        return (
            <CommentItem
              key={i}
              content={comment.comment_content}
              num_of_likes={comment.num_of_likes}
            />
          );
      })
    }

  render() {

  return (
    <div>
      <h3>Is it weird that I {this.props.content}?  (id={this.props.id})</h3>

      <div>
        {this.renderComments()}
      </div>

      <p>Comment on this:</p>
      <form>
        <input type="text" value={this.props.comment} id={this.props.id} onChange={(event) => this.props.updateFormComment(event)} />
        <button onClick={(event) => this.props.handleCommentSubmit(event)} >Submit</button>

      </form>

    </div>
    );
  }
}

export default QuoteItem;


