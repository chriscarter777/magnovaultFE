import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './Products.css';
import chest1 from '../resources/chest1.png';
import chest2 from '../resources/chest2.png';

export class Products extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">MagnoVault</h1>
                </header>

                <div className="page-content">
                    <article className="upper-content">
                        <h4>
                            Sturdy storage bench for front porches with remote and auto-locking features.<br />
                            Prevents theft of products delivered to the doorstep.
                </h4>
                    </article>

                    <article className="product-gallery">
                        <div className="product-item">
                            <img src={chest2} height="240" />
                            <label>Unfinished</label>
                            <label>Retail Value - $289 (includes one remote control)</label>
                        </div>
                        <div className="product-item">
                            <img src={chest1} height="240" />
                            <label>Natural Weather Resistant Finish</label>
                            <label>Retail Value - $329 (includes one remote control)</label>
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

                    <div class="lower-content">
                        <article className="lower-left-content">
                            <h4>Product Features:</h4>
                            <ul>
                                <li>Tamper resistant</li>
                                <li>Container-to-site secured</li>
                                <li>Auto-locking container access</li>
                                <li>Remote control locking</li>
                                <li>Hidden locking mechanism</li>
                                <li>Rubber feet to prevent contact with water</li>
                                <li>Unfinished and weather resistant options</li>
                                <li>No Assembly required</li>
                                <li>No external power connection necessary</li>
                                <li>Inconspicuous, attractive design</li>
                                <li>Ease-of-use and simple design</li>
                                <li>Limited Warranty</li>
                                <li>Local manufacturing and service</li>
                            </ul>
                        </article>

                        <article className="lower-right-content">
                            <h4>Product Specifications:</h4>
                            <h5>Inner Dimensions (LxWxH)</h5>
                            <h6>33"x18"x18"</h6>
                            <h5>Inner Load Limit</h5>
                            <h6>60 pounds</h6>
                            <h5>Outer Dimensions (LxWxH)</h5>
                            <h6>37"x24"x24"</h6>
                            <h5>Lid Load Limit</h5>
                            <h6>200 pounds</h6>
                            <h5>Product Weight</h5>
                            <h6>42 pounds</h6>
                            <h5>Exterior Composition</h5>
                            <h6>Wood</h6>
                            <h5>Interior Composition</h5>
                            <h6>Extruded Metal Frame</h6>
                            <h6>Metal lining</h6>
                            <h5>Locking Mechanism</h5>
                            <h6>12-volt battery required (included)</h6>
                            <h5>Remote Control</h5>
                            <h6>Engage and disengage locking mechanism up to 20 feet away</h6>
                            <h6>NiCd battery required (included)</h6>
                        </article>
                    </div>
                </div>
                <div className="adspace"></div>
            </div>
        );
    }
}