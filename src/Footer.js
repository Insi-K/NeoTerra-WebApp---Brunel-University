import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="main">

      <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col">

            <h4>NEO-TERRA </h4>

            <h1 className="list">
              <li>London, England</li>
              <li>Uxbridge</li>

            </h1>
          </div>
        
          <div className="col">

            <h4><Link to='/' className="Links-footer" >  Home </Link></h4>

            <div className="list">
              <li>
              <Link to='/Quiz' className="Links-footer" >  Quiz </Link>
              </li>
              <li>
                 <Link to='/Maps'className="Links-footer" >  Maps </Link>
               </li>
              <li>
              <Link to='/Learn' className="Links-footer">  Learn about climate change </Link>
              </li>
              <li>
              <Link to='/TakeAction'className="Links-footer" >  Take action </Link>
              </li>
            </div>
          </div>
        
          <div className="col">
            <h4>Contact us</h4>
            <div className="list">
              <li>FAQs</li>
              <li>Contact us</li>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">

            &copy;2020 Neo-Terra | All rights reserved |
             Terms of use | Cookie policy | About us | Instagram
            
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
