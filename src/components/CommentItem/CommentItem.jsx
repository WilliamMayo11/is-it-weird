import React, { Component } from 'react';
import style from './CommentItem.css';

class CommentItem extends Component {

  constructor() {
    super();
    this.state = {
      num_of_likes: 0
    }
  }

  componentDidMount() {
    this.setState({
      num_of_likes: this.props.num_of_likes
    })
  }

  // handleCommentLike() {

  // }

  render() {
    return(
      <div className="comment-item">
        <p>{this.props.content}</p>
        <p>likes: {this.state.num_of_likes}</p>
      </div>
    )
  }
};

export default CommentItem;
