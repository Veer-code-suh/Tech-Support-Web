import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <footer>
        <div className="foot-panal1">
          <Link to="/"> Back to Top</Link>
          <i className="fa-solid fa-arrow-up"></i>
        </div>

        <div className="foot-panal2">
          <ul>
            <h3>Get to Know Us</h3>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Smart-Tech</a>
            <a href="/">Investor Relation</a>
            <a href="/">Smart-Tech Devices</a>
            <a href="/">Smart-Tech Science</a>
          </ul>
          <ul>
            <h3>Connect with Us</h3>
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </ul>
          <ul>
            <h3>Make Money with Us</h3>
            <a href="/">Sell on Smart-Tech</a>
            <a href="/">Sell under Smart-Tech Accelerator</a>
            <a href="/">Protect and Build Your Brand</a>
            <a href="/">Smart-Tech Global Selling</a>
            <a href="/">Become an Affiliate</a>
            <a href="/">Fulfilment by Smart-Tech</a>
          </ul>
          <ul>
            <h3>Let Us Help You</h3>
            <a href="//">COVID-19 and Smart-Tech</a>
            <a href="//">Your Account</a>
            <a href="//">Returns Centre</a>
            <a href="//">100% Purchase Protection</a>
            <a href="//">Smart-Tech App Download</a>
            <a href="//">Help</a>
          </ul>
          <ul>
            <h3>Registered Office Address</h3>

            <p>B-6B, 49-50, Red Rose Building,</p>
            <p>Nehru Place, New Delhi-110019</p>
            <p>GSTIN NO.: 07AEJFS6244PIZA</p>
            <p>Phone No.: +91 9811885611</p>
            <p>Phone No.: +91 8010234411</p>
            <p>Email ID.: smarttechnology0082@gmai.com</p>
          </ul>
        </div>

        <div className="foot-panal3">
          <div className="logo"></div>
        </div>

        <div className="foot-panal4">
          <div className="pages">
            <a href="/">Conditions of Use</a>
            <a href="/">Privecy Notice</a>
            <a href="/">Your Ads Privecy Choices</a>
          </div>
          <div className="copyright">
            &copy; 1996-2023, Smart-Tech.com, Inc. or its affiliates. All rights
            reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
