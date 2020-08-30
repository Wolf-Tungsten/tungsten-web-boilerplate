import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootRouter from './router';
import './style/main.less';
import AuthGuard from './component/AuthGuard';
import Login from './page/Login';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './App.less';
const version = 2;

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={zhCN}>
        <AuthGuard beforeLogin={<Login/>}>
          <RootRouter />
        </AuthGuard>
      </ConfigProvider>
    </PersistGate>
  </Provider>
);

export default App;
