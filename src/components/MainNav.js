import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../resources/logo.svg';
import './MainNav.css';

export class MainNav extends React.Component {
    render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse navbar-fixed-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <img src={logo} className="nav-logo" alt="logo" />
                            <NavLink className='navbar-brand' to={ '/' }>MagnoVault</NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/dap' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> The Problem
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'} activeClassName='active'>
                                  <span className='glyphicon glyphicon-th-list'></span> Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/faq'} activeClassName='active'>
                                  <span className='glyphicon glyphicon-th-list'></span> FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/order'} activeClassName='active'>
                                  <span className='glyphicon glyphicon-pencil'></span> Order
                            </NavLink>
                        </li>
                       <li>
                            <NavLink to={ '/customers' } activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/media' } activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Media Relations
                            </NavLink>
                        </li>
                        <li>
                             <NavLink to={'/investors'} activeClassName='active'>
                                  <span className='glyphicon glyphicon-user'></span> Investor Relations
                            </NavLink>
                        </li>
                        <li>
                             <NavLink to={'/retail'} activeClassName='active'>
                                  <span className='glyphicon glyphicon-user'></span> Retailers
                            </NavLink>
                        </li>
                     </ul>
                </div>
            </div>
        </div>;
    }
}
