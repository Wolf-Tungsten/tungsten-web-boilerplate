import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DesktopRouter from './desktop';
import MobileRouter from './mobile';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

const RootRouter = function () {
  const isMobile = window.navigator.userAgent.toLowerCase().includes('ios')
    || window.navigator.userAgent.toLowerCase().includes('android');
  const { user } = useSelector((state: StoreState) => state);

  return (
    <HashRouter>
      <Switch>
        {/* 允许通过路由显式的指定挂载桌面端还是移动端 */}
        <Route path="/desktop">
          <DesktopRouter />
        </Route>
        <Route path="/mobile">
          <MobileRouter />
        </Route>
        {/* 默认路由根据设备判断和用户权限自动指定 */}
        <Route path='/'>
          {/* {(isMobile || (!user?.isAdmin)) ? <MobileRouter/> : <DesktopRouter/>} */}
          <DesktopRouter></DesktopRouter>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default RootRouter;
