
import React, { useEffect } from "react";
import "./Headerabout.css";
import Button from "../UIabout/Button/Button"
import "../UIabout/Button/Button.css"
import phoneHeader from "../../../Assets/phone-header-bg.png"
import logo from "../../../Assets/logoag-removebg-preview.png"

import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";


const Headerabout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
      return (
        <section id="headerabout">
          <div className="container headerabout">
            <div className="headerabout-left" data-aos="fade-right">
              <h1>
                <span>The Travel's leading</span>
                <span>HURRY UP, GRAB THE BEST</span>
                <span>DON'T THINK TWICE. IT'S ALRIGHT, MAKE A RESERVATION</span>
              </h1>
              <p className="u-text-small">
              Live the adventure with • OCEANA Travel •
Dream-like services,
24/7 assistance, and attractive rates.
Make your dreams a reality with us!
              </p>
              {/* <div className="header-cta">
                <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
                <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
              </div> */}
            </div>
            <div className="headerabout-right" data-aos="fade-left">
              <img src={logo} alt="phone" />
            </div>
          </div>
          <div className="floating-icon">
            <a href="#features">
              <BsMouse color="#fff" size={25} className="mouse" />
            </a>
          </div>
        </section>
      );
    };

export default Headerabout