import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
, document.getElementById('root'));
unregister();
