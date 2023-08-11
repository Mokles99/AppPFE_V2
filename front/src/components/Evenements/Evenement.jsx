import React, { useEffect } from "react";
import "./evenement.css";
import Aos from "aos";
import "aos/dist/aos.css";
import video from "../../Assets/event.mp4";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

// import Aos from 'aos'
// import 'aos/dist/aos.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";


import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";


const Evenement = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="home-event">
        <div className="overlay-event"> </div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="event-content container ">
          <div className="textDivevent">
            <h1 data-aos="fade-up" className="eventTitle">
              FIND US , BOOK<br></br>& HAVE FUN
            </h1>
          </div>
        </div>
      </section>
      {/* <div className="tours container section ">
        <div className="secContainer-tour">
          <span data-aos="fade-right" className="secTitle-tours">
            <SiYoutubemusic className="icon" />
            Hot Events ...
          </span>

          <div className="tourContainer">
            <div className="singleTour grid">
              <div className="imgDiv">
                <img src={img} />
              </div>
              <div className="tourInfo">
                <span className="tourTitle">TomorrowLand,Spain</span>
                <div className="stars_review flex">
                  <div className="stars">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                  </div>
                  <small className="custReview">2 Customer Review</small>
                </div>

                <p>
                  Tomorrowland is an annual music festival that takes place in
                  Boom, Belgium. The festival is known for its incredible
                  stages, mesmerizing light shows, and lineup of the world's top
                  electronic music artists.
                </p>
                <button className="btn"> Show More...</button>
              </div>

              <span className="price">
                $790
              </span>
            </div>
            <div className="singleTour grid">
              <div className="imgDiv">
                <img src={img} />
              </div>
              <div className="tourInfo">
                <span className="tourTitle">TomorrowLand,Spain</span>
                <div className="stars_review flex">
                  <div className="stars">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                  </div>
                  <small className="custReview">2 Customer Review</small>
                </div>

                <p>
                  Tomorrowland is an annual music festival that takes place in
                  Boom, Belgium. The festival is known for its incredible
                  stages, mesmerizing light shows, and lineup of the world's top
                  electronic music artists.
                </p>
                <button className="btn"> Show More...</button>
              </div>

              <span className="price">
                $790
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Evenement;
