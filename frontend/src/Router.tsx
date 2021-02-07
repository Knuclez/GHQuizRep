import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Regform from './models/Regform'
import Home from './models/Home'
import Pelea from './models/Pelea'

function Router() {
  
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Regform}/>
                <Route path="/pelea" component={Pelea}/>
            </Switch>
        </BrowserRouter>
    );
  }

  export default Router;