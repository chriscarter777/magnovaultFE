import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './Order.css';
import chest1 from '../resources/chest1.png';
import chest2 from '../resources/chest2.png';
import paypalLogo from '../resources/pp_cc_mark_111x69.jpg';

export class Order extends Component {
    render() {
        return (
            <div className="page-container">
                <header>
                    <h1 className="page-title">Order MagnoVault</h1>
                </header>
                <div className="page-content">
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

                    <div className="privacy-statement">
                            <span className="privacy-header">Privacy Statement:</span>
                            <span className="privacy-content">We will not sell your personal information with any entity other than for shipping and payment info as required on orders.</span>
                    </div>


                    <div className="order-form">
                        <form>
                            <div className="order-gallery">
                                <div className="order-item">
                                    <label>Unfinished MagnoVault Storage Bench $199</label>
                                    <img src={chest2} height="120" />
                                    <div>
                                        <label>Quantity</label><input type="number" name="quantUnfinished" />
                                    </div>                                </div>
                                <div className="order-item">
                                    <label>Natural Finish MagnoVault Storage Bench $249</label>
                                    <img src={chest1} height="120" />
                                    <div>
                                        <label>Quantity</label><input type="number" name="quantFinished" />
                                    </div>
                                </div>
                            </div>

                            <label>Payment Method</label>
                            Credit/Debit<input type="radio" name="method" value="cc" />
                            PayPal<input type="radio" name="method" value="pp" />

                            {/* <ShowForm /> */}

                             <label>Save for later</label><input type="checkbox" name="savelater" /><br />
                            {/* <input type="submit">Submit</input> */}
                        </form>
                    </div>

                    <div>
                        <label>Order</label>
                        <label>Subtotal</label>
                        <label>Tax</label>
                        <label>S/H</label>$16.00
                        <label>Total</label>
                        Estimated Delivery 6-8 weeks
                    </div>


                    <div className="adspace"></div>
                </div>
            </div>
        );
    
        function CCForm(){
            return(
                <div id="ccorder">
                <label>Name as appears on Credit/Debit Card</label><input type="text" name="bname" /><br />
                <label>Card Number</label><input type="text" name="cardnumber" /><br />
                <label>Card Expiration</label><input type="text" name="expiration" /><br />
                <label>CCV</label><input type="text" name="ccv" /><br />
                <label>Billing Address</label><input type="text" name="bstreet" /><br />
                <label>Billing City</label><input type="text" name="bcity" /><br />
                <label>Billing State</label><input type="text" name="bstate" /><br />
                <label>Billing ZIP</label><input type="text" name="bzip" /><br />
                <label>Email</label><input type="text" name="email" /><br />

                <label>Ship to billing address</label><input type="checkbox" name="shiptob" /><br />
                <label>First Name</label><input type="text" name="first" /><br />
                <label>Last Name</label><input type="text" name="last" /><br />
                <label>Shipping Address</label><input type="text" name="sstreet" /><br />
                <label>Shipping City</label><input type="text" name="scity" /><br />
                <label>Shipping State</label><input type="text" name="sstate" /><br />
                <label>Shipping ZIP</label><input type="text" name="szip" /><br />
                <label>Attention</label><input type="text" name="attention" /><br />
            </div>
            );
        }

        function PPForm(){
            return(
                <div id="pporder">
                <img src={paypalLogo} height="60" /><br />
                <label>PayPal Account Name</label><input type="text" name="bname" /><br />
                <label>PayPal Account Number</label><input type="text" name="cardnumber" /><br />
                <label>Billing Address</label><input type="text" name="bstreet" /><br />
                <label>Billing City</label><input type="text" name="bcity" /><br />
                <label>Billing State</label><input type="text" name="bstate" /><br />
                <label>Billing ZIP</label><input type="text" name="bzip" /><br />
                <label>Email</label><input type="text" name="email" /><br />

                <label>Ship to billing address</label><input type="checkbox" name="shiptob" /><br />
                <label>First Name</label><input type="text" name="first" /><br />
                <label>Last Name</label><input type="text" name="last" /><br />
                <label>Shipping Address</label><input type="text" name="sstreet" /><br />
                <label>Shipping City</label><input type="text" name="scity" /><br />
                <label>Shipping State</label><input type="text" name="sstate" /><br />
                <label>Shipping ZIP</label><input type="text" name="szip" /><br />
                <label>Attention</label><input type="text" name="attention" /><br />
            </div>
            );
        }
    }


        // function ShowForm(){
        //     if(true){
        //         return <CCForm>;
        //     }
        //     else{
        //         return <PPForm>;
        //     }   
        // }
}