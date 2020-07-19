import * as React from 'react';
import './style.less';
import { Button } from 'antd';
import { useSelector } from 'react-redux'

const Home = () => {
    // 获取 store 内容
    console.log(useSelector(state => state))
    // 修改 store 内容
    return (
        <div>
            <Button type="primary"> Hello tungsten </Button>
        </div>
    )
}

export default Home;