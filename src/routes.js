import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { About } from './components/About';
import { App } from './components/App';
import { CustomerContact } from './components/CustomerContact';
import { Dap } from './components/Dap';
import { Faq } from './components/Faq';
import { Home } from './components/Home';
import { InvestorContact } from './components/InvestorContact';
import { MediaContact } from './components/MediaContact';
import { Order } from './components/Order';
import { Products } from './components/Products';
import { Retail } from './components/Retail';

export const routes = <BrowserRouter>
        <App>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/customers' component={ CustomerContact } />
            <Route path='/dap' component={ Dap } />
            <Route path='/faq' component={ Faq } />
            <Route path='/home' component={ Home } />
            <Route path='/investors' component={ InvestorContact } />
            <Route path='/media' component={ MediaContact } />
            <Route path='/order' component={ Order } />
            <Route path='/products' component={ Products } />
            <Route path='/retail' component={ Retail } />
        </App>
    </BrowserRouter>;