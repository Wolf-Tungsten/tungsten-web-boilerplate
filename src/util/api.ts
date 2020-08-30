import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, persistor } from '../store';

// 给认证环节用的
export const api = axios.create({
  baseURL: 'https://seicwxbz.seu.edu.cn/meeting-api/',
  transformResponse(data: any) {
    // 对 data 进行任意转换处理
    try {
      const parsedData = JSON.parse(data);  return parsedData;
    } catch (e) {
      return { success: false, reason: '未知服务器错误', code: 500 };
    }
  },
});

export const useApi = () => {
  const { apiToken } = useSelector((state: StoreState) => state);
  return axios.create({
    baseURL: 'https://seicwxbz.seu.edu.cn/meeting-api/',
    headers: {
      'x-api-token': apiToken,
    },
    transformResponse(data: any) {
    // 对 data 进行任意转换处理
      const parsedData = JSON.parse(data);
      return parsedData;
    },
  });
};

