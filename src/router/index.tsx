import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../page/Home';
import Content from '../page/Content';

const RootRouter = function () {
  return (
    <HashRouter>
      <Switch>
        <Route path="/content" component={Content} />
        <Route path="/" component={Home}/>
      </Switch>
    </HashRouter>
  );
};

export default RootRouter;
