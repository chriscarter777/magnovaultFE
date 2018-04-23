import React, { Component } from 'react';
import './App.css';
import { MainNav } from './MainNav.js';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

export class App extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="app-nav">
                    <MainNav />
                </div>
                <div className="app-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}