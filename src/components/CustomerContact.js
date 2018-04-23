import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './CustomerContact.css';

export class CustomerContact extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">Contact Us</h1>
                </header>

                <div className="page-content">
                <address>
                    MagnoVault<br />
                    Vancouver, WA<br />
                    (971) 295-0904<br />
                    email:
                    </address>

                <div className="contact-form">
                    <h4>Please Contact Me:</h4>
                    <form>
                        <label>First Name</label><input type="text" name="first" /><br />
                        <label>Last Name</label><input type="text" name="last" /><br />
                        <label>Email</label><input type="text" name="email" /><br />
                        <label>Street Address</label><input type="text" name="street" /><br />
                        <label>City</label><input type="text" name="city" /><br />
                        <label>State</label><input type="text" name="state" /><br />
                        <label>ZIP Code</label><input type="number" name="zip" /><br />
                        <label>Phone</label><input type="phone" name="phone" /><br />
                        <label>How did you hear of us?</label><input type="text" name="howhear" /><br />
                        <label>Best contact method</label><input type="text" name="howcontact" /><br />
                        <label>Question</label><input type="text" name="question" />
                        {/* <input type="submit">Submit</input> */}
                    </form>
                </div>

                   <div className="privacy-statement">
                        <p>
                            <span className="privacy-header">Privacy Statement:</span>
                            <span className="privacy-content">We will not sell your personal information with any entity.</span>
                        </p>
                    </div>
                    </div>

                <div className="adspace"></div>
            </div>
        );
    }
}