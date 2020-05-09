import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import appReducer from './redux/reducer';

const store = createStore(appReducer, {}, applyMiddleware(thunk))

import App from "./App";

ReactDOM.render(
    <Provider store={store}> 
<App/>
</Provider>, 
document.getElementById('root') );