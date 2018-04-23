import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import chest1 from '../resources/chest1.png';
import chest2 from '../resources/chest2.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">Welcome to MagnoVault</h1>
                    <h4 className="page-subtitle"><i>"Porch Pirates Hate Us" &trade;</i></h4>
                </header>

                <div className="page-content">
                    <article className="product-gallery">
                        <div className="product-item">
                            <img src={chest2} height="200" /><br />
                            <label>
                                Unfinished Retail Value - $289 (includes one remote control)
                            </label>
                        </div>
                        <div className="product-item">
                            <img src={chest1} height="200" /><br />
                            <label>
                                Natural Weather Resistant Finish Retail Value - $329 (includes one remote control)
                            </label>
                        </div>
                        <div className="product-item">
                            <iframe width="452" height="240" src="https://www.youtube.com/embed/FbTJhB67rDQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            {/* <video width="320" height="240" controls>
                                <source src={"https://youtu.be/KgCwhQTn9F0"} type="video/ogg" />
                                Unable to play video.
                            </video> */}
                            <label>
                                See MagnoVault in action
                            </label>
                        </div>
                    </article>
                    <article className="special-offer">
                        <h4>
                            Exclusive
                        <span className="hastooltip" title="price good for orders received by 8/31/18 - max of 3 per household at introductory price.  Submit contact request for orders over 3.">
                                &nbsp;Introductory Offer&nbsp;
                        </span>
                            for
                        <span className="hastooltip" title="valid for destination zip codes 97005, 97006, etc...">
                                &nbsp;Portland/Vancouver Metro Area&nbsp;
                        </span>
                            Shipping Destinations
                        </h4>
                        <p>Pre-orders available for all other zip codes - submit contact request for pre-ordering instructions</p>
                    </article>
                </div>
                <div className="adspace"></div>
            </div>
        );
    }
}