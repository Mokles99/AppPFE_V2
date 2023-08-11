import React from "react";
import "./newsletter2.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../Assets/images/male-tourist.png";

const Newsletter = () => {
  return(
  <section >
    <Container className="newsletter">
      <Row className="part5">
        <Col lg="6">
          <div className="newsletter-content">
            <h2>Subscribe now to get useful information</h2>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button className="btn newsletter-btn">Subscribe</button>
            </div>
          </div>
        </Col>
        <Col lg="6">
            <div className="newsletter-img">
              <img src={maleTourist} alt="" />
            </div>
        </Col>
      </Row>
    
    </Container>
  </section>
  )
};

export default Newsletter;
