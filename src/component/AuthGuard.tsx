import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, persistor } from '../store';
import * as qs from 'querystring';
import { api } from '../util/api';

type Props = {
  beforeLogin?: React.ReactNode;
  history?: any;
  children?: React.ReactNode
}

const isWeixin = (window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1);

const launchAuth = () => {
  if (isWeixin) {
    window.location.href = `https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent('https://seicwxbz.seu.edu.cn/boilerplate/')}`;
  } else {
    window.location.href = `https://newids.seu.edu.cn/authserver/login?goto=${encodeURIComponent('https://seicwxbz.seu.edu.cn/boilerplate/')}`;
  }
};

// const serviceValidate = async (ticket: string) => {
//   const service = 'https://seicwxbz.seu.edu.cn/boilerplate/';
//   const res = await api.post('/auth', {
//     ticket,
//     service,
//     platform: isWeixin ? 'wechat-web' : 'web',
//   });
//   if (res.data.success) {
//     return res.data.result;
//   }
//   alert(res.data.reason);
// };

const AuthGuard: React.FC<Props> = ({ children, history, beforeLogin }: Props) => {
  // 获取登录状态
  const { isLogin, apiToken } = useSelector((state: StoreState) => state);
  const [perpared, setPerpared] = useState(false);
  api.defaults.headers['x-api-token'] = apiToken;
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLoginStatus = async () => {
      if (!isLogin) {
        const search = qs.parse(window.location.search.split('?')[1]);
        if (search.ticket) {
          // search 中包含 ticket，进行认证
          const token = search.ticket; // TODO：便于调试，请删除本行
          // TODO：取消下方注释
          // const token = await serviceValidate(search.ticket as string);
          api.defaults.headers['x-api-token'] = token;
          if (token) {
            dispatch({ type: 'login', payload: token });
          } else {
            alert('统一身份认证过程出错，点击重试');
            window.location.href = 'https://seicwxbz.seu.edu.cn/boilerplate/';
          }
        } else {
          const { href } = window.location;
          window.localStorage.setItem('meeting-continue', href);
          launchAuth();
        }
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (isLogin) {
      const unfinishedRoute = window.localStorage.getItem('boilerplate-continue');
      if (unfinishedRoute) {
        window.localStorage.removeItem('meeting-continue');
        persistor.flush().then(() => {
          window.location.href = unfinishedRoute;
        });
        return;
      }
      // 检查登录状态是否有效
      // 在 herald-webservice-template 中一般通过请求用户信息验证
      api.get('/user', { headers: { 'x-api-token': apiToken } }).then((res) => {
        if (res.data.success) {
          dispatch({ type: 'user', payload: res.data.result });
          return;
        }
        console.log(res);
        throw new Error('身份凭证失效，请刷新当前页面然后重试');
      })
        .then(() => {
          setPerpared(true);
        })
        .catch((e) => {
          console.log(e);
          setPerpared(true); // TODO：删除本行
          // TODO：取消下方注释
          // alert('身份凭证失效，请刷新当前页面然后重试');
          // dispatch({ type: 'logout' });
        });
    }
  }, [isLogin]);

  return (
    <>
      {perpared ? children : beforeLogin}
    </>
  );
};

export default AuthGuard;
