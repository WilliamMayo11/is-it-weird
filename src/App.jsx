import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main.jsx';
import PromptForm from './PromptForm/PromptForm.jsx';
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

  render() {
    return (
      <div>
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          quote: this.state.quote,
          updateFormQuote: (event) => this.updateFormQuote(event)
        })}
      </div>
      </div>
    );
  }
}

export default App;
