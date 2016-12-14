import React, { Component } from 'react';
import style from './BestOf.css';

// const PromptForm = (props) => {
  class BestOf extends Component {

  render() {
    return (
      <div>
        <div className={style['subtitle-flex']}>
          <h3 className={style['subtitle']}>Yesterday's winner</h3>
          <img src="http://i.imgur.com/XlJpcqv.png" alt="#" className={style['check-mark']}/>
        </div>
        <div className={style['quote-container']}>
          <h3 className={style['prompt']}>"Is it weird that I do some weird thing?"</h3>
          <div className={style['comment-item']}>
            <p>comment comment! comment comment..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BestOf;
