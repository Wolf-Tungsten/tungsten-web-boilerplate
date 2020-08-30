import React from 'react';
import {  Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Login() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div style={{
      width: '100vw', height: '100vh', display: 'flex',
      justifyContent: 'center', alignItems: 'center',
    }}>
      <Spin indicator={antIcon} size="large"/>
    </div>
  );
}
