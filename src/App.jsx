import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main.jsx';
import PromptForm from './components/PromptForm/PromptForm.jsx';
import QuoteList from './components/QuoteList/QuoteList.jsx';
import Quoteitem from './components/QuoteItem/QuoteItem.jsx';
import './App.css';

class App extends Component {

  constructor(props) {

    super();
    this.state = {
      quote: '',
      quotes: []

    };
    this.getAllQuotes = this.getAllQuotes.bind(this)
}

  updateFormQuote(e) {
    this.setState({
      quote: e.target.value
  });
  console.log(this.state.quote);
  }

  handleFormSubmit() {
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

  getAllQuotes() {
    console.log('****App.jsx getAllQuotes****');
    fetch(`/db/quotes`)
    .then(r => r.json())
    .then(data => {
      // console.log(data)
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
          updateFormQuote: (event) => this.updateFormQuote(event),
          handleFormSubmit: ()=> this.handleFormSubmit(),
          getAllQuotes: ()=> this.getAllQuotes()
        })}
      </div>
      </div>
    );
  }
}

export default App;
