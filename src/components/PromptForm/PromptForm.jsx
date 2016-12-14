import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './PromptForm.css';

// const PromptForm = (props) => {
  class PromptForm extends Component {

  componentWillMount() {
    this.props.getAllQuotes;
  }

  render() {
    return (
      <div className={style['prompt-page']}>
      <h1 className={style['title']}>Is It Weird</h1>
      <h3 className={style['tag-line']}>Go ahead... Ask.</h3>
      <div>
      </div>
      <div className={style['prompt']}>
        <h1 className={style['prompt-text']}>Is it weird that I...</h1>
        <form>
          <input type="text" value={this.props.quote} onfocus={"this.value"} onChange={this.props.updateFormQuote} />
          <br/>
          <Link to="Main">
            <button onClick={this.props.handleQuoteSubmit} >Submit</button>
          </Link>
        </form>
      </div>
      </div>
      );
  }
}

export default PromptForm;
