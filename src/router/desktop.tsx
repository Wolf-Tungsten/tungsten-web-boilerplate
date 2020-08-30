import * as React from 'react';
import { HashRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import { DesktopFrame } from '../page/Frame';
import { StoreState } from '../store';
import { useSelector } from 'react-redux';
import Page1 from '../page/desktop/Page1';

const DesktopRouter = function () {
  const match = useRouteMatch();
  const { user } = useSelector((state: StoreState) => state);
  return (
    <DesktopFrame>
      <HashRouter>
        <Switch>
          <Route path={`${match.path}/page-1`} component={Page1}></Route>
          <Route path={`${match.path}/`} component={Page1}>
          </Route>
        </Switch>
      </HashRouter>
    </DesktopFrame>
  );
};

export default DesktopRouter;
