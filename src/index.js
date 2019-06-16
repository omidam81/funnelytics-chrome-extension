import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
//import { save, load } from 'redux-localstorage-simple';

//import { loadState, saveState } from './store/localStorage';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import rootReducer from './store/reducers';

//import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage
};


//let store = createStore(persistedReducer);


export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));
//const persistedState = loadState();
const store = createStore(
  persistedReducer,
  //rootReducer(history),
  //persistedState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
      //, loadingBarMiddleware(),
      //,save(),load()
    )
  )
);
const persistor = persistStore(store);
// store.subscribe(() => {
//   saveState(store.getState().form);
// });
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
