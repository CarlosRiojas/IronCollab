import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import MainHub from './pages/MainHub';
import LoginPage from './pages/LoginPage';
import LoginCard from './components/LogCard';
import SignupCard from './components/SignCard';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupCard} />
      <Route exact path="/MainHub" component={MainHub} />
      <Route exact path="/login" component={LoginCard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
