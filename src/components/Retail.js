import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './Retail.css';

export class Retail extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">Resale Opportunities for Retailers</h1>
                </header>
                <div className="page-content">
                    <address>
                        MagnoVault<br />
                        Vancouver, WA<br />
                        (971) 295-0904<br />
                        email:
                    </address>

                    <div className="contact-form">
                        <h4>For Retailers Seeking More Information on being an authorized reseller of MagnoVault products, please complete the information below</h4>
                        <form>
                            <label>First Name</label><input type="text" name="first" /><br />
                            <label>Last Name</label><input type="text" name="last" /><br />
                            <label>Organization</label><input type="text" name="organization" /><br />
                            <label>Title</label><input type="text" name="title" /><br />
                            <label>City</label><input type="text" name="city" /><br />
                            <label>State</label><input type="text" name="state" /><br />
                            <label>Email</label><input type="text" name="email" /><br />
                            <label>Phone</label><input type="phone" name="phone" /><br />
                            <label>How did you hear of us?</label><input type="text" name="howhear" /><br />
                            <label>Best contact method</label><input type="text" name="howcontact" /><br />
                            <label>Message</label><input type="text" name="message" />
                            {/* <input type="submit">Submit</input> */}
                        </form>
                    </div>

                    <div className="privacy-statement">
                        <p>
                            <span className="privacy-header">Privacy Statement:</span>
                            <span className="privacy-content">We will not sell your personal information with any entity.</span>
                        </p>
                    </div>

                    <div className="adspace"></div>
                </div>
            </div>
        );
    }
}