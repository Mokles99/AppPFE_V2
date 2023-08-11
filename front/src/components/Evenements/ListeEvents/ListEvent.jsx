import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listevent.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import video from "../../Assets/event.mp4";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

const ListEvent = () => {


  
const [eventsList, setEventsList] = useState([]);
console.log(eventsList)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/event/events");
        setEventsList(data?.events)
      } catch (e) {
        console.log(e);
      }
    };

    fetchEvents();

    //setList2(data.events);
  }, []);

  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="2000"
      className="tours container section "
    >
      <div className="secContainer-tour">
        <span data-aos="fade-right" className="secTitle-tours">
          <SiYoutubemusic className="icon" />
          Hot Events ...
        </span>

        <div className="tourContainer">
          {/* <div className="singleTour grid">
              <div className="imgDiv">
                <img src={img2} />
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
            <div className="singleTour grid">
              <div className="imgDiv">
                <img src={img2} />
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
            <div className="singleTour grid"> */}
          {/* <div className="imgDiv">
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
            </div> */}

          {/*api///////////////////////*/}

          {eventsList.map((eventsItem, Key) => (
            // return (

            <div key={Key} className="singleTour grid">
              <div className="imgDiv">
                <img src={eventsItem.images[0]?.url} />
              </div>
              <div className="tourInfo">
                <span className="tourTitle">{eventsItem.title}</span>
                <div className="stars_review flex">
                  <div className="stars">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                  </div>
                  <small className="custReview"> Customer Review</small>
                </div>

                <p>{eventsItem.description}</p>
                <Link className="btn" to={`/eventdetails/${eventsItem._id}`}>
                  {" "}
                  Show More...
                </Link>
              </div>

              <span className="price">{eventsItem.price}</span>
            </div>
            // )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListEvent;

