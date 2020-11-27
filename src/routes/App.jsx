import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';
import Layout from '../layout/Layout';

import { Economy, Home, Login, Register } from '../pages'



const App = () => {
  
  return (  
    <HashRouter> 
          <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/economy" component={Economy}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
          </Layout>
    </HashRouter>
  );
}

export default App;