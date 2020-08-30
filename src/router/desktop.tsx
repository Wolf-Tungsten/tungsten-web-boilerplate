import * as React from 'react';
import { HashRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import { DesktopFrame } from '../page/Frame';
import Page1 from '../page/desktop/Page1';
import { Page2Sub1, Page2Sub2 } from '../page/desktop/Page2';
import Page3 from '../page/desktop/Page3';

const DesktopRouter = function () {
  const match = useRouteMatch();
  // const { user } = useSelector((state: StoreState) => state);
  return (
    <DesktopFrame>
      <HashRouter>
        <Switch>
          <Route path={`${match.path}/page-1`} component={Page1}></Route>
          <Route path={`${match.path}/page-2-1`} component={Page2Sub1}></Route>
          <Route path={`${match.path}/page-2-2`} component={Page2Sub2}></Route>
          <Route path={`${match.path}/page-3/:payload`} component={Page3}></Route>
          <Route path={`${match.path}/`} component={Page1}>
          </Route>
        </Switch>
      </HashRouter>
    </DesktopFrame>
  );
};

export default DesktopRouter;
