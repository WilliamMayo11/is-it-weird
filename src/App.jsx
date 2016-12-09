import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main.jsx';
import PromptForm from './components/PromptForm/PromptForm.jsx';
import './App.css';

class App extends Component {

  constructor(props) {

    super();
    this.state = {
      quote: ''
    };
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

  render() {
    return (
      <div>
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          quote: this.state.quote,
          updateFormQuote: (event) => this.updateFormQuote(event),
          handleFormSubmit: ()=> this.handleFormSubmit()
        })}
      </div>
      </div>
    );
  }
}

export default App;
