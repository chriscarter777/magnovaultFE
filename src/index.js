import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import * as RoutesModule from './routes';
let routes = RoutesModule.routes;

ReactDOM.render(
    <BrowserRouter children={ routes } />, 
    document.getElementById('react-app')
);
registerServiceWorker();
