import * as React from 'react';
import './style.less';
import { Typography, Button, Space } from 'antd';
import { useDispatch } from 'react-redux'
const { Title, Paragraph, Text } = Typography;

const Home = () => {
    // 修改 store 内容
    const dispatch = useDispatch()

    const logout = ()=>{
        console.log('点击登录了')
        dispatch({type:'logout'})
    }
    
    return (
        <div style={{margin:'40px 20px 20px 20px'}}>
        <Typography>
            <Title>狼剩子的前端开发项目模板</Title>
            <Paragraph>
                这是一个用于项目快速启动的前端开发模板，围绕 React 框架技术展开，使用时下流行的 TypeScript 语言。
                使用 0 配置的 Parcel 作为打包工具，集成 React Router、React Redux 等常用框架，选用 Ant Design 作为 UI 设计库。
                在项目开发过程中，请使用 React Hooks API。
            </Paragraph>
            <Paragraph>
                <br></br>
                <Button onClick={logout} type="primary">注销登录状态</Button>
            </Paragraph>
        </Typography>
        </div>
    )
}

export default Home;