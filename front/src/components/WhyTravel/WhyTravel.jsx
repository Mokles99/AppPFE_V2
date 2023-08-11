import React,{useEffect}  from "react";
import "./whyTravel.css";

import img from '../../Assets/travel.png'
import img2 from '../../Assets/mountain.png'
import img3 from '../../Assets/client.png'

import video from '../../Assets/travel.mp4'
import video2 from '../../Assets/air.mp4'
import video3 from '../../Assets/plane.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'
 

const WhyTravel = () => {

  useEffect (()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 data-aos="fade-up" className="title">Why Traveling ..? </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-right" className="singleItem">
            <img src={img} alt="Image Name" />
            <h3> 100+ Places </h3>

            <p>
              Reserch show that a chance to break away from the normal rythms of
              daily life reduces stress and improves health and well-being
            </p>
          </div>

          <div data-aos="fade-right" className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3> 1000+ Mountains </h3>

            <p>
            Escaping daily routines for mountains reduces stress, improves well-being, and boosts health, as research suggests.
            </p>
          </div>

          <div data-aos="fade-right" className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3> 2000+ Clients </h3>

            <p>
            We are proud to serve over 1000 clients who choose to travel with us, trusting us with their unforgettable experiences
            </p>
          </div>
        </div>
        <div className="container">
        <div  data-aos="fade-right" className="videoCard ">
            <div className="cardContent grid">
                <div className="cardText">
                    <h2> Wonderful Travel experience there! </h2>
                    <p> The Adventure subranking is based on an 
                        aqually weighted average of scores from
                        five country.
                        The Adventure subranking is based on an 
                        aqually weighted average of scores from
                        five country.
                    </p>
                </div>
                <div className="cardVideo">
                    <video src={video3} autoPlay loop muted type="video/mp4"></video>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTravel;
