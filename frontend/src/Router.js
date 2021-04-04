import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import MainHub from './pages/MainHub';
import LoginPage from './pages/LoginPage';


const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/signup" component={Home} />
      <Route exact path="/MainHub" component={MainHub} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
