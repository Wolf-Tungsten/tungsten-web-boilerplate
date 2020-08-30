/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Layout, Menu, Tabs, Space, Row, Col } from 'antd';
import { StoreState } from '../store';
import logo from '../asset/logo.png';
import logoNoSeu from '../asset/logo-no-seu.png';
import BackgroundLogo from '../asset/bg-logo.png';
import {
  LogoutOutlined,
  TeamOutlined,
  SettingOutlined,
  CommentOutlined,
  HistoryOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const { Header, Footer, Content } = Layout;

const DesktopFrame = (props: { children: any }) => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state: StoreState) => state);
  // 获取 user 对象，可以根据用户权限决定不同的权限
  const logout = () => {
    dispatch({ type: 'logout' });
    window.location.href = 'https://newids.seu.edu.cn/authserver/logout?goto=https://seicwxbz.seu.edu.cn/boilerplate/';
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            <img src={logo} style={{ height: '90%' }} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys="page-1">
              <Menu.Item disabled={false} icon={<CommentOutlined />} key="page-1">
                <Link to="/desktop/page-1">页面1</Link>
              </Menu.Item>
              <Menu.SubMenu disabled={false} icon={<TeamOutlined />} key="page-2" title="页面2">
                <Menu.Item key="page-2-1">
                  <Link to="/desktop/page-2-1">页面2-1</Link>
                </Menu.Item>
                <Menu.Item key="page-2-2">
                  <Link to="/desktop/page-2-2">页面2-2</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu icon={<SettingOutlined />} disabled={true} key="page-3" title="页面3">
                <Link to="/desktop/page-3">页面3</Link>
              </Menu.SubMenu>
            </Menu>
            <div style={{ flexGrow: 1 }}></div>
            <LogoutOutlined onClick={logout} style={{ color: '#fff', fontSize: '24px' }} />
          </div>
        </Header>
        <Content style={{ padding: '50px 50px 0 50px' }}>
          <div style={{
            backgroundColor: '#fff',
            backgroundImage: `url(${BackgroundLogo})`,
            backgroundSize: '680px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top -120px right -200px',
            padding: '24px',
          }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright © 2020 All Rights Reserved | 每天想念基哥的狼剩子
        </Footer>
      </Layout>
    </>
  );
};

const MobileFrame = (props: { children: any }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StoreState) => state);
  const [select, setSelect] = useState('tab-1');
  const logout = () => {
    dispatch({ type: 'logout' });
    window.location.href =      'https://newids.seu.edu.cn/authserver/logout?goto=https://seicwxbz.seu.edu.cn/boilerplate/';
  };

  return (
    <>
      <div >
        <Header style={{
          paddingLeft: '15px',
          paddingRight: '15px',
          height: '50px',
          position: 'fixed',
          top: '0',
          width: '100vw',
          zIndex: 100,
        }}>
          <div
            style={{ display: 'flex', height: '100%', alignItems: 'center' }}
          >
            <img src={logoNoSeu} style={{ height: '40%' }} />
            <div style={{ flexGrow: 1 }}></div>
            <LogoutOutlined
              onClick={logout}
              style={{ color: '#fff', fontSize: '20px' }}
            />
          </div>
        </Header>
        <div style={{
          padding: '50px 0 50px 0',
          background: '#f0f2f5',
          minHeight: '100vh',
          backgroundImage: `url(${BackgroundLogo})`,
          backgroundSize: '500px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom -80px right -150px',
        }}>
          <Row style={{ marginLeft: '15px', marginRight: '15px' }}>
            <Col
              xs={{ offset: 0, span: 24 }}
              sm={{ offset: 4, span: 16 }}
              md={{ offset: 6, span: 12 }}
              xl={{ offset: 8, span: 8 }}
            >
              {props.children}
            </Col>
          </Row>
        </div>
        {user?.isAdmin ? <Footer style={{
          backgroundColor: '#fff',
          height: '50px',
          position: 'fixed',
          bottom: '0',
          width: '100vw',
          zIndex: 100,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', marginTop: '0px'  }}>
            <Link
              to="/mobile/tab-1"
              onClick={() => setSelect('tab-1')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: select === 'tab-1' ? 'teal' : '#111',
              }}
            >
              <HistoryOutlined style={{ fontSize: '20px' }} />
              <div style={{ marginTop: '2px', fontSize: '8px' }}>页面一</div>
            </Link>
            <Link
              to="/mobile/tab-2"
              onClick={() => setSelect('tab-2')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: select === 'tab-2' ? 'teal' : '#111',
              }}
            >
              <AppstoreOutlined style={{ fontSize: '20px' }} />
              <div style={{ marginTop: '2px', fontSize: '8px' }}>页面二</div>
            </Link>
          </div>
        </Footer> : <></>}
      </div>
    </>
  );
};
export { DesktopFrame, MobileFrame };
