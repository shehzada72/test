import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Exercise from './components/exercise/index';
import ItemDetail from './components/exercise/item-detail';
// import App from './app';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactLifeCycle from "./pages/react-lifecycle";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={'/exercise/:id'} component={ItemDetail}/>
            <Route path={'/exercise'} component={Exercise}/>
            <Route path={'/react-lifecycle'} component={ReactLifeCycle}/>
            <Route path={'/'} component={Home}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
