import React from "react";
import "./Contactus.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Dp from "../Images/dilip.png";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <Container className="dpcontainer">
        <Row>
          <div className="abouthead">
            <h1>About Us</h1>
          </div>
          <Col>
            <Image src={Dp} roundedCircle />
            <div className="icons">
              <Link to="" target="blank">
                <i class="fa-brands fa-square-whatsapp fa-shake"></i>
              </Link>
              <Link
                to="https://instagram.com/smart_technology0001?igshid=NGVhN2U2NjQ0Yg=="
                target="blank"
              >
                <i class="fa-brands fa-square-instagram fa-bounce"></i>
              </Link>
              <Link to="" target="blank">
                <i class="fa-brands fa-square-facebook fa-beat-fade"></i>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="aboutcontent">
              <h2 className="name">Dilip Kumar Maurya</h2>

              <p className="aboutpara">
                Welcome to my world of <b>Smart Technology</b> I take pride in
                offering a curated selection of reliable and affordable
                pre-owned laptops to cater to your computing needs. With a
                strong passion for technology, I meticulously source, refurbish,
                and present a range of laptops that are not only budget-friendly
                but also high in quality. My mission is to bridge the gap
                between your requirements and your budget. Whether you're a
                student looking for an affordable laptop for your studies, a
                professional in need of a reliable workhorse, or simply someone
                who appreciates a good deal, I've got you covered. Every laptop
                I offer has undergone thorough testing and refurbishment to
                ensure it performs at its best. You can trust that you're
                getting a dependable device that won't let you down. Plus, by
                choosing a second-hand laptop, you're not only saving money but
                also contributing to a more sustainable future by reducing
                electronic waste. Explore my collection and find the perfect
                laptop that fits your needs without compromising on quality or
                your wallet. Join me on this journey to affordable and reliable
                computing solutions!
              </p>
            </div>
          </Col>
          <div className="abouthead">
            <h1>Contact Us</h1>
          </div>
          <Col>
            <div className="foot-panal2">
              <Col>
                <iframe
                  width="70%"
                  height="300"
                  frameborder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=B-6B,%2049-50,%20Red%20Rose%20Building,%3C/p%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3ENehru%20Place,%20New%20Delhi-110019+(Smart%20Techology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/population/">
                    Population Estimator map
                  </a>
                </iframe>
              </Col>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
