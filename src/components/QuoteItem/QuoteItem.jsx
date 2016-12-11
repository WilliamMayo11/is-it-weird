import React, { Component } from 'react';
import { Link } from 'react-router';
import CommentItem from '../CommentItem/CommentItem.jsx';

// const PromptForm = (props) => {
  class QuoteItem extends Component {

// renderComments() {
//   return this.props.all_comments.map((comment, i) => {
//     <article>
//       <CommentItem
//         key={i}
//         content={comment.comment_content}
//       />
//     </article>
//   })
// }

        // <div>
        //   {this.renderComments()}
        // </div>

    render() {
  return (
    <div>
      <h3>Is it weird that I {this.props.content}?  (id={this.props.id})</h3>



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


