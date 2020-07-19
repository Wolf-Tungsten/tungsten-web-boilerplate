import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store';
import * as qs from 'querystring';

type Props = {
    beforeLogin?: React.ReactNode;
    history?: any;
    children?: React.ReactNode
}

const simulateCASAuth = (ticket: string) => (new Promise((resolve, reject) => {
  setTimeout(() => resolve(ticket), 1000);
}));

const launchCASAuth = () => {
  window.location.href = `https://newids.seu.edu.cn/authserver/login?goto=${encodeURIComponent('https://seicwxbz.seu.edu.cn/template/')}`;
};

const AuthGuard: React.FC<Props> = ({ children, history, beforeLogin }: Props) => {
  // 获取登录状态
  const { isLogin, apiToken, hasUnfinishedRoute, unfinishedRoute } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const route = window.location.href;
      const search = qs.parse(route.split('?')[1]);
      console.log('调用check', search, { isLogin, apiToken, hasUnfinishedRoute, unfinishedRoute });
      if (!isLogin) {
        // 如果未登录
        if (search.ticket) {
          // search 中包含 ticket，进行认证
          const token = await simulateCASAuth(search.ticket);
          dispatch({ type: 'login', payload: token });
        } else {
          // 保存当前路由
          dispatch({ type: 'saveUnfinishedRoute', payload: route });
          launchCASAuth();
        }
      } else {
        if (hasUnfinishedRoute) {
          console.log('访问未完成的路由');
          // 完成未完成的路由
          dispatch({ type: 'clearUnfinishedRoute' });
          console.log(unfinishedRoute);
          window.location.href = unfinishedRoute as string;
        }
      }
    };
    checkLoginStatus();
  }, [isLogin]);

  return (
        <>
        {isLogin ? children : beforeLogin}
        </>
  );
};

export default AuthGuard;
