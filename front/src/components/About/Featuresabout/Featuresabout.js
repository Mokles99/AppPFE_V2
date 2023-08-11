import React, { useEffect } from "react";
import "./Featuresabout.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../../Assets/logoag-removebg-preview.png";
import Featureabout from "./Featureabout";
import { FeatureAboutList } from "./dataabout";

import AOS from "aos";
import "aos/dist/aos.css";

const Featuresabout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="featuresabout">
      <div className="container features">
        <div className="titleabout"  data-aos="zoom-in-down"> 
        {/* data-aos="fade-up" */}
          <BsFillBookmarkStarFill className="iconfeature" color="orangered"  size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small">
          Don't dream your life, live your dreams. With OCEANA, turn your travel dreams into unforgettable memories
          </p>
        </div>
        <div className="featuresabout-content">
          <div className="featuresabout-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="featuresabout-right" data-aos="fade-left">
            {FeatureAboutList.map((feature) => (
              <Featureabout
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuresabout;