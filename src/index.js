import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

// Redux related.
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import { routerMiddleware } from 'connected-react-router';
import {composeWithDevTools} from "redux-devtools-extension";

import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import blogsReducer from "./store/reducers/blogs-reducer";
import usersReducer from "./store/reducers/users-reducer";

import {rootSaga} from "./store/sagas";







const rootReducer = combineReducers({
    blogsRdcr: blogsReducer,
    usersRdcr: usersReducer,
});

const loggerMiddleware = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

let sagaMonitorOptions = {};
if (window.__SAGA_MONITOR_EXTENSION__) {
    sagaMonitorOptions = {
        sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    };
}
const sagaMiddleware = createSagaMiddleware(sagaMonitorOptions);

const history = createBrowserHistory();

const middleware = [
    loggerMiddleware,
    thunk,
    sagaMiddleware,
    routerMiddleware(history),
];


const initialState = {};
// Create redux store with history.
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
        // other store enhancers if any
    )
);


store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
};
store.runSagaTask();

// Extensions
// store.runSaga = sagaMiddleware.run;
// store.injectedReducers = {}; // Reducer registry
// store.injectedSagas = {}; // Saga registry
// window.store = store;




const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>;

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
