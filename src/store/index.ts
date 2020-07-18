import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

interface State {
    isLogin: boolean;
    apiToken?: string;
    hasUnfinishedRoute: boolean;
    unfinishedRoute?: any;
}

interface ActionFunc {
    (state:State, payload?: any): void;
}

interface Action {
    type: string;
    payload?: any;
}

interface Actions {
    [propName: string]: ActionFunc;
}


const initialState:State = {
    isLogin: false,
    hasUnfinishedRoute: false
}

const actions:Actions = {
    login(state, payload){
        state.isLogin = true
        state.apiToken = payload
        return state
    }
}

const reducer = function (state:State = initialState, action:Action){
    if(typeof actions[action.type] === "function"){
        let newState = JSON.parse(JSON.stringify(state))
        return actions[action.type](newState, action.payload)
    }
    return initialState
}

const persistedReducer = persistReducer({
    key: 'tungsten-redux',
    storage,
}, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }


