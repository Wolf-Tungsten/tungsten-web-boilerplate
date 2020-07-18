import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { RootRouter } from './router'
import './style/main.less'

const Main:React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootRouter />
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
)
