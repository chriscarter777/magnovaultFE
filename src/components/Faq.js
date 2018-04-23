import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './Faq.css';

export class Faq extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">Frequently Asked Questions</h1>
                </header>

                <div className="page-content">
                    <div className="faq-item">
                        <div className="faq-question">
                            Is MagnoVault good?
                </div>
                        <div className="faq-answer">
                            Yes, it sure is.
                </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            Really good?
                </div>
                        <div className="faq-answer">
                            Yup.
                </div>
                    </div>
                </div>
                <div className="adspace"></div>
            </div>
        );
    }
}