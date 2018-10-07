import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

import {Redirect, Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {PINKFLOYD_MBID} from './queries/musicbrain';
import Lookup from "./components/Lookup";
import './index.css';

const history = createBrowserHistory();

const client = new ApolloClient({
    uri: "https://graphbrainz.herokuapp.com/"
});

ReactDOM.render(
    (
        <ApolloProvider client={client}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={() => (<Redirect to={PINKFLOYD_MBID}/>)}/>
                    <Route path="/:mbid" component={({match}) => (
                        <Lookup query={match.params}/>
                    )}/>
                </Switch>
            </Router>
        </ApolloProvider>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
