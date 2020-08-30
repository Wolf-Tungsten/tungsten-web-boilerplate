import * as React from 'react';
import { HashRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import { MobileFrame } from '../page/Frame';
import Page1 from '../page/mobile/Page1';
import Page2 from '../page/mobile/Page2';
const MobileRouter = function () {
  const match = useRouteMatch();

  return (
    <MobileFrame>
      <HashRouter>
        <Switch>
          <Route path={`${match.path}/tab-1`} component={Page1}></Route>
          <Route path={`${match.path}/tab-2`} component={Page2}></Route>
          <Route path={`${match.path}/`} component={Page1}></Route>
        </Switch>
      </HashRouter>
    </MobileFrame>
  );
};

export default MobileRouter;
