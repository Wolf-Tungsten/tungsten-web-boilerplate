import * as React from 'react';
import { HashRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import { MobileFrame } from '../page/Frame';
const MobileRouter = function () {
  const match = useRouteMatch();

  return (
    <MobileFrame>
      <HashRouter>
        <Switch>
          <Route path={`${match.path}/`}></Route>
        </Switch>
      </HashRouter>
    </MobileFrame>
  );
};

export default MobileRouter;
