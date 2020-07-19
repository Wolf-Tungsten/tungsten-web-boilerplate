import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootRouter from './router';
import './style/main.less';
import AuthGuard from './component/AuthGuard';
import Login from './page/Login';

const Main: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthGuard beforeLogin={<Login/>}>
        <RootRouter />
      </AuthGuard>
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  <Main/>,
  document.getElementById('main')
);
