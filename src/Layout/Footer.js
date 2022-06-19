import React from "react";
import "../././Styles/Footer.css"
import   '../Components/pages/Newsletter Page/Newsletter'
import Newsletter from "../Components/pages/Newsletter Page/Newsletter";
import { Component } from "react";
import {Link} from 'react-router-dom'
class Footer extends Component {
  
  render(){
  return (
    <div className="main">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col">
            <h2 className="list">
              <li>London, England</li>
              <li>Uxbridge</li>
            </h2>
          </div>

          <div className="com">  
             <h1>Neo Terra </h1>
           </div> 
          {/* Main Links */}
          <div className="footer-links">
            <div>
              <Link to='/' className="link">Home </Link>
            </div>
            <div>
              <Link to='/Learn' className="link" > Learn</Link>
            </div>
            <div>
            <Link to='/News' className="link" > News</Link>
            </div>
            <div>
            <Link to='/Quiz' className="link" > Quiz</Link>
            </div>
            <div>
            <Link to='/About' className="link" > About us</Link>
            </div>
            <div>
            <Link className="link" to="/CarbonFootprint">CF Calculator </Link>            </div>
          </div>
          
        </div>
        <hr className="footer-line" />
        {/* Bottom Info / Links */}
        <div className="row">
          <p className="col-sm">
            &copy;2020 Neo-Terra | All Rights Reserved |
            <a className="TOU"href="/TermsOfUse">Terms Of Use</a> | <a className="CP"href="/CookiesPolicy">Cookies Policy</a> | FAQs | <a className="ig-tag"href="https://www.instagram.com/neo_terra/">Instagram</a>
          </p>
        </div>     
        <Newsletter/>
      </div>
    </div>
  );
}
}
export default Footer;
