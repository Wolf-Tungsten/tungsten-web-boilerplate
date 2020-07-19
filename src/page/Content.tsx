import React, { useState, useEffect } from 'react';
import { Typography, Button, Space, Input } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Content = (props: { history: any }) => {
  const [text, setText] = useState('<初始值>');
  const { history } = props;
  useEffect(() => {
    console.log('调用了useEffect中的方法');
  }, [text]);

  return (
    <div style={{ margin: '40px 20px 20px 20px' }}>
      <Typography>
        <Title>内容展示页</Title>
        <Paragraph>
          这个页面展示了 React Hooks 的基本用法。下面有一个文本框：
        </Paragraph>
        <Paragraph>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
        </Paragraph>
        <Paragraph>
          通过 <code>useState</code> 可以创建一个state变量，实现输入值的绑定：{text}
        </Paragraph>
        <Paragraph>
          可以从控制台观察 <code>useEffect</code> 的作用。
        </Paragraph>
        <Paragraph>
          <Space>
            <Button onClick={ () => {
              history.goBack();
            }}>返回上一页</Button>
          </Space>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Content;

