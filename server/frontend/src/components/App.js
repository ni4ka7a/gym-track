import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Dashboard from './dashboard/Dashboard';
import Workouts from './workouts/Workouts';
import Routines from './routines/Routines';
import Exercises from './exercises/Exercises';
import Register from './accounts/Register';
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';

import { loadUser } from '../actions/auth';

const alertOptions = {
    timeout: 3000,
    possition: 'top center',
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute
                                        exact
                                        path={['/', '/dashboard']}
                                        component={Dashboard}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/workouts"
                                        component={Workouts}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/routines"
                                        component={Routines}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/exercises"
                                        component={Exercises}
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/Login"
                                        component={Login}
                                    />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
