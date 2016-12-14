import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main.jsx';
import { Link } from 'react-router';
import PromptForm from './components/PromptForm/PromptForm.jsx';
import QuoteList from './components/QuoteList/QuoteList.jsx';
import QuoteItem from './components/QuoteItem/QuoteItem.jsx';
import style from './App.css';

class App extends Component {

  constructor(props) {

    super();
    this.state = {
      quote: '',
      quotes: [],
      comment: '',
      comments: [],
      quote_id: ''
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
      comment: e.target.value,
      quote_id: e.target.id
  });
  console.log(this.state.comment);
  }

  // updateQuoteId(e) {
  //   let quote_id = Number.parseInt(e.target.id);
  //   console.log(quote_id);
  //   this.setState({
  //     quote_id: quote_id,
  //   });
  // }

  handleQuoteSubmit() {
    if (this.state.quote !== '') {
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
}

  getAllQuotes() {
    fetch(`/db/quotes`)
    .then(r => r.json())
    .then(data => {
      console.log('*****getAllQuotes****** App.jsx' + data);
      this.setState({
        quotes: data.reverse()
      })
      console.log(this.state.quotes)
    })
    .catch(err => console.log(err));
  }

  getAllComments() {
    fetch(`/db/comment`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        comments: data
      })
      console.log(this.state.comments)
    })
    .catch(err => console.log(err));
  }

  handleCommentSubmit() {
    if (this.state.comment !== '') {
    fetch('/db/comment', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        content: this.state.comment,
        quote_id: this.state.quote_id
      })
    })
    .then(this.setState({
      comment: ''
    }))
    .then(this.getAllQuotes())
    .then(this.getAllComments())
    .catch(err => console.log(err));
  }
}

  render() {
    return (
      <div>
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            quote: this.state.quote,
            quotes: this.state.quotes,
            comment: this.state.comment,
            comments: this.state.comments,
            quote_id: this.state.quote_id,
            updateFormQuote: (event) => this.updateFormQuote(event),
            handleQuoteSubmit: ()=> this.handleQuoteSubmit(),
            getAllQuotes: ()=> this.getAllQuotes(),
            getAllComments: ()=> this.getAllComments(),
            updateFormComment: this.updateFormComment.bind(this),
            handleCommentSubmit: this.handleCommentSubmit.bind(this)
          })}
        </div>
      </div>
    );
  }
}

// updateQuoteId: this.updateQuoteId.bind(this)

export default App;
