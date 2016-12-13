import React from 'react';
import App from './App.jsx';
import Main from './components/Main/Main.jsx';
import PromptForm from './components/PromptForm/PromptForm.jsx';
import { Route, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={App} >
      <IndexRoute path="/" component={PromptForm} />
      <Route path="/main" component={Main} />
    </Route>
  );
