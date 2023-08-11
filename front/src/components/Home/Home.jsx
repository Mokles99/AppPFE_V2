import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./home.css";
import video from "../../Assets/Video2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
// import {FiFaTripadvisorFacebook} from  'react-icons/fi'
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import SearchBar from "../../shared/SearchBar";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({ handleFilterChange, searchTerms }) => {
  //scral animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="overlay"> </div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container ">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            {t("search_your_holiday")}
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter name here"
                value={searchTerms.title}
                onChange={(e) => handleFilterChange(e, "title")}
              />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date"> Select your location</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter location here "
                value={searchTerms.city}
                onChange={(e) => handleFilterChange(e, "city")}
              />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price"> Max price:</label>
              <h3 className="total"> {searchTerms.price} TND </h3>
            </div>
            <div className="input flex">
              <input
                type="range"
                max="2000"
                min="0"
                value={searchTerms.price}
                onChange={(e) => handleFilterChange(e, "price")}
              />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS </span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
