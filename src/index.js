import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, withRouter, Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
//import { store } from './helpers';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { history } from './helpers';
import { createBrowserHistory } from 'history';
import rootReducer from './store/reducers';

export const history = createBrowserHistory();

const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)
        //, loadingBarMiddleware()
    ))
);

// import {
//     BrowserRouter
// } from 'react-router-dom'
ReactDOM.render(
    (
        // <Router history={history}>
            <Provider store={store}>
                <App history={history}/>
            </Provider>
        // </Router>
        
    ),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();