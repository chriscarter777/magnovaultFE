import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './InvestorContact.css';

export class InvestorContact extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">Investor Relations</h1>
                </header>
                <div className="page-content">
                    <address>
                        MagnoVault<br />
                        Vancouver, WA<br />
                        (971) 295-0904<br />
                        email:
                    </address>


                    <div className="contact-form">
                        <h4>For Investors Seeking More Information on Investing in MagnoVault products, complete information below</h4>
                        <form>
                            <label>First Name</label><input type="text" name="first" /><br />
                            <label>Last Name</label><input type="text" name="last" /><br />
                            <label>Organization</label><input type="text" name="organization" /><br />
                            <label>Title</label><input type="text" name="title" /><br />
                            <label>Email</label><input type="text" name="email" /><br />
                            <label>Phone</label><input type="phone" name="phone" /><br />
                            <label>How did you hear of us?</label><input type="text" name="howhear" /><br />
                            <label>Best contact method</label><input type="text" name="howcontact" /><br />
                            <label>Investment Type</label><input type="text" name="invtype" />
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