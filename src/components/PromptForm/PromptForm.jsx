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
      <div>
      <h1 className={style['title']}>Is It Weird</h1>
        <h1>Is it weird that I...</h1>
        <form>
          <input type="text" value={this.props.quote} onChange={this.props.updateFormQuote} />
          <Link to="Main">
            <button onClick={this.props.handleQuoteSubmit} >Submit</button>
          </Link>
        </form>
      </div>
      );
  }
}

export default PromptForm;
