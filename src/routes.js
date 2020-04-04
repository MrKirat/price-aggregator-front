import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Result from './pages/result';
import NotFound from './pages/not-found';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/result" component={Result} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;