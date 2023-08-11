import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utlis/avgRating";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  
    //methode useeffect
  // useEffect(async()=>{
  //     var response = await fetch('http://localhost:8080/hotel/hotels')
  //     var data = await response.json()

  //     setList2(data.hotels)

  //   } ,[])
  //   const [liste2, setList2] = useState([])
  //   console.log(liste2)

  const { _id, title, city, images, price, featured, reviews , priceChM,priceChJ,priceDemi,priceAll} = tour;
  
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
      <div className="tour-card">
        <Card>
          <div className="tour-imge">
            <img src={images[0]?.url} alt="tour-img" />
            {featured && <span>Featured</span>}
          </div>
          <CardBody>
            <div className="card-top d-flex align-items-center justify-content-between">
              <span className="tours-location d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i> {city}
              </span>
              <span className="tours-rating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i> {avgRating == 0 ? null : avgRating}
                {totalRating == 0 ? (
                  "Not rated yet"
                ) : (
                  <span>({reviews.length})</span>
                )}
              </span>
            </div>
            <h5 className="tour-title">
              <Link to={`/tours/${_id}`}>{title}</Link>
            </h5>
            <div className="card-buttom d-flex align-items-center justify-content-between mt-3">
              <h5>
                {price} DT <span> / Night </span>
              </h5>
              {/* <h5>
                ${priceChM} <span> /per person </span>
              </h5>
              <h5>
                ${priceChJ} <span> /per person </span>
              </h5>
              <h5>
                ${priceAll} <span> /per person </span>
              </h5>
              <h5>
                ${priceDemi} <span> /per person </span>
              </h5> */}

              <button className="booking-btn">
                <Link to={`/tours/${_id}`}>Book Now</Link>
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TourCard;
