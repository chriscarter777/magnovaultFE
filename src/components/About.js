import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './About.css';

export class About extends Component {
  render() {
    return (
      <div className="page-container">
      <header>
          <h1 className="page-title">About Us:</h1>
        </header>
        <article>
            MagnoVault is located in Vancouver, Washington where all products are manufactured and serviced.<br/>
            MagnoVault is a forward-looking company that delivers quality products with consumer protection and satisfaction as its highest priorities.<br/>
            Our engineers are continuing to improve the features and ease-of-use of future products.<br/>
            Currently, MagnoVault markets only to residents of the Pacific Northwest with plans to expand to other areas throughout the United States.
        </article> 
        <div className="adspace"></div>
      </div>
    );
  }
}