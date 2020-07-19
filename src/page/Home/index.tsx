import * as React from 'react';
import './style.less';
import { Typography, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from '../../store';
const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const apiToken = useSelector((state: StoreState) => state.apiToken);
  // 修改 store 内容
  const dispatch = useDispatch();
  const logout = () => {
    console.log('点击登录了');
    dispatch({ type: 'logout' });
  };

  return (
    <div style={{ margin: '40px 20px 20px 20px' }}>
      <Typography>
        <Title>狼剩子的前端开发项目模板</Title>
        <Paragraph>
          这是一个用于项目快速启动的前端开发模板，围绕 React 框架技术展开，使用时下流行的 TypeScript 语言。
          使用 0 配置的 Parcel 作为打包工具，集成 React Router、React Redux 等常用框架，选用 Ant Design 作为 UI 设计库。
          在项目开发过程中，请使用 React Hook API。
        </Paragraph>
        <Paragraph>
          当前用户 API_TOKEN = {apiToken}
        </Paragraph>
        <Paragraph>
          对于关键的全局状态/需要持久化的状态，可以使用 Redux 进行管理，使用方法请阅读本页面展示 API_TOKEN 和注销登录状态操作的实现。
        </Paragraph>
        <Paragraph>
          本页和下一页之间跳转按钮的功能实现展示了 React Router 简单的使用方法。
        </Paragraph>
        <Paragraph>
          <br></br>
          <Space>
            <Button onClick={logout} type="primary">注销登录状态</Button>
            <Link to="/content"><Button>前往下一页</Button></Link>
          </Space>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Home;
