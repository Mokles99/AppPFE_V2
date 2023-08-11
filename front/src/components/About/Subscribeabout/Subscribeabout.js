import React, { useEffect } from "react";
import "./Subscribeabout.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {HiOutlineStatusOnline} from "react-icons/hi"
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribeabout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Subscribe now   
          <HiOutlineStatusOnline style={{paddingLeft:'1rem'}}/>
        </h2>
        <div>
          <div className="form-control">
            <input className="inputabout" type="text"  placeholder="Enter Your Email..." />
            <button className="btnabout">Subscribe </button>
          </div>
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribeabout;
