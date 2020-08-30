import React, { useState, useEffect, useRef } from 'react';
import {
  Typography,
  Button,
  Space,
  Form,
  Select,
  Input,
  Tag,
  message,
  Table,
  Radio,
  Spin,
  Modal,
  Pagination,
  PageHeader,
  AutoComplete,
} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import moment from 'moment';
import { useApi } from '../../util/api';
import logo from '../../../asset/logoWithText.png';
const { Title, Paragraph, Text } = Typography;

const Page1 = () => {
  // useState 示例
  const [text, setText] = useState('初始的文本');

  // useEffect 示例
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // 设置了一个计数器
    const timer = setInterval(() => {
      setCounter(v => v + 1);
    }, 1000);
    // 在组件销毁的时候清除这个计数器
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Typography>
        <Title>狼剩子的前端项目模板-页面1</Title>
        <Paragraph>这个页面演示了 React Hook API 的简单使用方法。</Paragraph>
        <Paragraph>
          <Input placeholder="修改这里的文本"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          ></Input>
        </Paragraph>
        <Paragraph>这里的文本会同步发生变化：{text}</Paragraph>
        <Paragraph>这个计数器的数值每秒增加：{counter}</Paragraph>
      </Typography>
    </>
  );
};

export default Page1;
