import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Space } from 'antd';
const { Title, Paragraph, Text } = Typography;

export default function Login() {
  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: 'login', payload: 'fake_token' });
  };

  return (
    <div style={{ margin: '40px 20px 20px 20px' }}>
      <Typography>
        <Title>狼剩子的前端开发项目模板</Title>
        <Paragraph>
                    点击下方按钮登录
        </Paragraph>
        <Paragraph>
          <br></br>
          <Button onClick={login}>登录</Button>
        </Paragraph>
      </Typography>
    </div>
  );
}
