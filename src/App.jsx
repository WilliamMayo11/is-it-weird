import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main.jsx';
import PromptForm from './components/PromptForm/PromptForm.jsx';
import QuoteList from './components/QuoteList/QuoteList.jsx';
import QuoteItem from './components/QuoteItem/QuoteItem.jsx';
import './App.css';

class App extends Component {

  constructor(props) {

    super();
    this.state = {
      quote: '',
      quotes: [],
      comment: ''

    };
}

  updateFormQuote(e) {
    this.setState({
      quote: e.target.value
  });
  console.log(this.state.quote);
  }

  updateFormComment(e) {
    this.setState({
      comment: e.target.value
  });
  console.log(this.state.comment);
  }

  handleQuoteSubmit() {
    fetch('/db/quote', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        content: this.state.quote
      })
    })
    .then(this.setState({
      quote: ''
    }))
    // .then(this.getAllQuotes())
    .catch(err => console.log(err));
  }

  handleCommentSubmit() {
    console.log('app.jsx handleCommentSubmit');
    fetch('/db/comment', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        content: this.state.comment
      })
    })
    .then(this.setState({
      comment: ''
    }))
    .catch(err => console.log(err));
  }

  getAllQuotes() {
    fetch(`/db/quotes`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        quotes: data
      })
      console.log(this.state.quotes)
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          quote: this.state.quote,
          quotes: this.state.quotes,
          comment: this.state.comment,
          updateFormQuote: (event) => this.updateFormQuote(event),
          handleQuoteSubmit: ()=> this.handleQuoteSubmit(),
          getAllQuotes: ()=> this.getAllQuotes(),
          updateFormComment: this.updateFormComment.bind(this),
          handleCommentSubmit: this.handleCommentSubmit.bind(this)
        })}
      </div>
      </div>
    );
  }
}

export default App;
