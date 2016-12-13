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

  handleCommentLike(id) {
    fetch(`/db/comment/like/${id}`, {
      method: 'put'
    })
    .then(
      this.setState({
        num_of_likes: this.num_of_likes + 1
      }))
    .catch(err => console.log(err));
  }



  render() {
    return(
      <div className={style['comment-item']}>
        <p>{this.props.content}</p>
        <div className={style['like-flex']}>
          <button onClick={() => this.handleCommentLike(this.props.id)}>Like!</button>
          <p>Total Likes: {this.state.num_of_likes}</p>
        </div>
      </div>
    )
  }
};

export default CommentItem;
