import React from 'react';
import App from './App.jsx';
import Main from './Main/Main.jsx';
import PromptForm from './PromptForm/PromptForm.jsx';
import { Route, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={App} >

      <Route path="/welcome" component={PromptForm} />
      <Route path="/main" component={Main} />
    </Route>
  );
