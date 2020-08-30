import React from 'react';
import {
  Typography,
  Button,
} from 'antd';

import { useHistory } from 'react-router';
const { Title, Paragraph } = Typography;

const Page3 = (props: {match: {params: {payload: string}}}) => {
  // 读取 Redux 中的值
  const history = useHistory();

  return (
    <>
      <Typography>
        <Title>狼剩子的前端项目模板-页面3</Title>
        <Paragraph>
          页面 2-2 传入的内容是：{props.match.params.payload}
        </Paragraph>
        <Paragraph>
          <Button onClick={() => {
            history.goBack();
          }}>返回页面 2-2</Button>
        </Paragraph>
      </Typography>
    </>
  );
};

export default Page3;
