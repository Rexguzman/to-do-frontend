import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    HashRouter,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../layout/Layout';

import { Economy, Home, Login, Register, Profile, Error404, GoogleAuth, EmailConfirm } from '../pages';

const App = ({ user }) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => setIsLogged(user.isLogged), [user.isLogged]);

    return (
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        {isLogged ? <Home /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/login">
                        {isLogged ? <Redirect to="/" /> : <Login />}
                    </Route>
                    <Route exact path="/register">
                        {isLogged ? <Redirect to="/" /> : <Register />}
                    </Route>
                    <Route exact path="/profile">
                        {isLogged ? <Profile /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/economy">
                        {isLogged ? <Economy /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/google/auth" component={GoogleAuth}/>
                    <Route exact path="/confirm/:id" component={EmailConfirm}/>
                    <Route component={Error404} />
                </Switch>
            </Layout>
        </HashRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, null)(App);
