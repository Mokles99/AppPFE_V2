import React from "react";
import "./hotel.css";

import { Container, Row, Col } from "reactstrap";
import Subtitle from "../../shared/Subtitle";
import heroImg from "../../Assets/images/hero-img01.jpg";
import heroImg2 from "../../Assets/images/hero-img02.jpg";
import heroVideo from "../../Assets/images/hero-video.mp4";
import experienceImg from "../../Assets/images/traveltayma2.png"
import worldImg from "../../Assets/images/world.png";
import SearchBar from "../../shared/SearchBar";
import ServicesList from "../Services/ServiceList";
import FeaturedTourList from "../Featured-Tours/FeaturedTourList";
import MasonryImagesGallery from "./image-gallery/MasonryImagesGallery";
import Newsletter from "../../shared/Newsletter";

function hotel() {
  return (
    <>
      <section>
        <Container>
          <Row className="numbr1" >
            <Col  lg="6">
              <div className="hero-content">
                <div className="hero-subtitle d-flex align-items-center">
                  {/* <Subtitle subtitle={"Know Before You Go "} /> */}
                  <h5 className="services-subtitle">Know Before You Go</h5>
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories </span>
                </h1>
                <p className="debut">
                "En réservant votre hôtel avec OCEANA voyage , vous ne vous contentez pas de choisir une chambre. Vous choisissez l'expérience, le confort et la tranquillité d'esprit. Faites de chaque séjour une histoire à raconter avec nous."
                </p>
              </div>
            </Col>
            <Row className="numbr2" > 
            <Col  >
              <div className="hero-img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col >
              <div className="hero-vid-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col >
              <div className="hero-img2-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            </Row>
            <SearchBar />
          </Row>
          <Row className="part2">
            <Col >
              <h5 className="services-subtitle">What we serve</h5>
              <h2 className="services-title"> We offer our best services </h2>
            </Col>
            <ServicesList  />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row >
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured-tour-title"> Our featured hotels </h2>
            </Col>
            <div className="part3" >
            <FeaturedTourList />
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="part4">
            <Col lg="6">
              <div className="experience-content">
                <Subtitle subtitle={"Experience"} />
                <h2> 
                  with our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br/>
                  Similique quis sit earum! Nam dignissimos eaque ea maiores
                </p>
              </div>
              <div className="counter-wrapper d-flex align-items-center gap-5">
                <div className="counter-box">
                  <span>12K+ </span>
                <h6> Successfull Trip</h6>
                </div>
                <div className="counter-box">
                  <span>2K+ </span>
                <h6> Regular Clients</h6>
                </div>
                <div className="counter-box">
                  <span>12K+ </span>
                <h6> Years experiences</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience-img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
          <Col lg='12'>
            {/* <Subtitle subtitle={'Gallery'}/> */}
            <h2 className="gallery-title">Visit our  customers tour gallery </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/> 

    </>
  );
}

export default hotel;
