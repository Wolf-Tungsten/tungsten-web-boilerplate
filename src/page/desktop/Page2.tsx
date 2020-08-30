import React, { useState, useEffect, useRef } from 'react';
import {
  Typography,
  Button,
  Input,
} from 'antd';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store';
const { Title, Paragraph } = Typography;

const Page2Sub1 = () => {
  // 读取 Redux 中的值
  const { example } = useSelector((state: StoreState) => state);
  // 获取 dispatch
  const dispatch = useDispatch();

  return (
    <>
      <Typography>
        <Title>狼剩子的前端项目模板-页面2-1</Title>
        <Paragraph>这个页面演示了 React-Redux 在 Hooks API 模式下的使用方法，
          下方文本框的修改会保存至 store 中并被 localStorage 持久化，即使刷新页面还是可以保留</Paragraph>
        <Paragraph>
          <Input placeholder="这里的文本会被持久化"
            value={example}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch({ type: 'changeExample', payload: e.target.value });
            }}
          ></Input>
        </Paragraph>
      </Typography>
    </>
  );
};

const Page2Sub2 = () => {
  const history = useHistory();
  const [pushPayload, setPushPayload] = useState('初始的内容');

  const gotoPage3 = () => {
    history.push(`/desktop/page-3/${pushPayload}`);
  };

  return (
    <>
      <Typography>
        <Title>狼剩子的前端项目模板-页面2-2</Title>
        <Paragraph>这个页面演示了编程式的导航，编辑下方的文本，然后点击按钮，你将会在第三个页面看到你输入的文本。
         这段文本内容将通过 React-Router 进行传参。
        </Paragraph>
        <Paragraph>
          <Input placeholder="传入下个页面的文本"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPushPayload(e.target.value);
            }}
          ></Input>
        </Paragraph>
        <Paragraph>
          <Button type="primary" onClick={gotoPage3}>点击前往页面3</Button>
        </Paragraph>
      </Typography>
    </>
  );
};

export { Page2Sub1, Page2Sub2 };
