import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './Dap.css';

export class Dap extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">The Problem:</h1>
                    <h4 className="page-subtitle">Delivery at Place Statistics</h4>
                </header>
                <div className="page-content">
                <div className="featured-link">
                    <a href="https://www.thepackageguard.com/prevention-solution-compare-package-theft/">thepackageguard.com</a>
                    </div>
                    </div>
                <div className="adspace"></div>
            </div>
        );
    }
}