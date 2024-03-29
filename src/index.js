import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import rootReducer from './store/reducers';

export const history = createBrowserHistory();

const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)
        //, loadingBarMiddleware()
    ))
);

ReactDOM.render(
    (
            <Provider store={store}>
                <App history={history}/>
            </Provider>
        
    ),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();