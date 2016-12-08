import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import routes from './routes.js';
import { Router, Route, Link, hashHistory } from 'react-router';
// import './index.css';

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root-container')
);

// import React from 'react';
// import { render } from 'react-dom';
// import App from './App.jsx';
// import Main from './Main/Main.jsx';
// import PromptForm from './PromptForm/PromptForm.jsx';
// import { Router, Route, hashHistory } from 'react-router';

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App} />
//     <Route path="/main" component={Main} />
//     <Route path="/welcome" component={PromptForm} />
//   </Router>
// ), document.getElementById('root-container'))
