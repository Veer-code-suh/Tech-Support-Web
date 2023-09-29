import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import laptop from "../Images/laptop2.jpg";
import computer1 from "../Images/Computer2.jpg";
import ram from "../Images/Ram2.jpg";
import pro from "../Images/Pro2.jpg";
import ssd from "../Images/SSD1.jpg";
import moniter1 from "../Images/Moniter1.jpg";
import "./Categories.css";

function ShapeExample() {
  return (
    <Container className="catbg">
      <Row className="row">
        <Col className="Col">
          <Link to="/laptop" className="link">
            <Image className="imground" src={laptop} roundedCircle />
            <h6>Laptop</h6>
          </Link>
        </Col>
        <Col className="Col">
          <Link to="/computer" className="link">
            <Image className="imground" src={computer1} roundedCircle />
            <h6>Computer</h6>
          </Link>
        </Col>
        <Col className="Col">
          <Link to="/ram" className="link">
            <Image className="imground" src={ram} roundedCircle />
            <h6>Ram</h6>
          </Link>
        </Col>
        <Col className="Col">
          <Link to="/processor" className="link">
            <Image className="imground" src={pro} roundedCircle />
            <h6>Proccesor</h6>
          </Link>
        </Col>
        <Col className="Col">
          <Link to="/ssd" className="link">
            <Image className="imground" src={ssd} roundedCircle />
            <h6>SSD</h6>
          </Link>
        </Col>
        <Col className="Col">
          <Link to="/monitor" className="link">
            <Image className="imground" src={moniter1} roundedCircle />
            <h6>Monitor</h6>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
