import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../page/Home'
import Content from '../page/Content'

export const RootRouter = function (props){
    return (
        <HashRouter>
            <Switch>
            <Route path="/content" component={Content} />
            <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}
