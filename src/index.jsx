import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './client/store';
import './client/styles/main.scss';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import { IndexPage } from './client/pages';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Redirect from="/" to='/files' exact />
                <Route path="/files" component={IndexPage} />
                <Route path="/branches" component={IndexPage} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
