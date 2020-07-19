/* eslint-disable no-param-reassign */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface StoreState {
    isLogin: boolean;
    apiToken?: string;
    hasUnfinishedRoute: boolean;
    unfinishedRoute?: string;
}

const initialState: StoreState = {
  isLogin: false,
  hasUnfinishedRoute: false,
};

const actions: Actions = {
  login(state, payload) {
    state.isLogin = true;
    state.apiToken = payload;
    return state;
  },
  logout(state) {
    state.isLogin = false;
    state.apiToken = undefined;
    return state;
  },
  saveUnfinishedRoute(state, payload) {
    state.hasUnfinishedRoute = true;
    state.unfinishedRoute = payload;
    return state;
  },
  clearUnfinishedRoute(state) {
    state.hasUnfinishedRoute = false;
    state.unfinishedRoute = undefined;
    return state;
  },
};

const reducer = (state: StoreState = initialState, action: Action) => {
  if (typeof actions[action.type] === 'function') {
    const newState = JSON.parse(JSON.stringify(state));
    return actions[action.type](newState, action.payload);
  }
  return initialState;
};

const persistedReducer = persistReducer({
  key: 'tungsten-redux',
  storage,
}, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

type ActionFunc = (state: StoreState, payload?: any) => StoreState;

interface Action {
    type: string;
    payload?: any;
}

interface Actions {
    [propName: string]: ActionFunc;
}

