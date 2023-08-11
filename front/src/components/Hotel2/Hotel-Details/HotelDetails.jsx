import React, { useState, useRef } from "react";
import "./hotelDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
//import tourData from '../../../Assets/data/tours'
import avatar from "../../../Assets/images/avatar.jpg";
import tourData from "../../../Assets/data/tours";
import calculateAvgRating from "../../../utlis/avgRating";

import Booking from "../Booking/Booking";
import Newsletter from "../../../shared/Newsletter";

const HotelDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [hotelRating, setHotelRating] = useState(null);

  const tour = tourData.find((tour) => tour.id == id);
  //proprieties from hotel object
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupsize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };
  //submit request to the server

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // alert(`${reviewText},${hotelRating}`)
  };

  return (
    <>
    <section style={{paddingTop:'13vh'}}>
      <Container>
        <section className="grid-layout">
          <div className="first-item">
            <div className="hotel-content">
              <img src={photo} alt="" />
              <div className="hotel-info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tours-rating d-flex align-items-center gap-1">
                    <i
                      class="ri-star-fill"
                      style={{ color: "var(--SecondaryColor)" }}
                    ></i>
                    {avgRating == 0 ? null : avgRating}
                    {totalRating == 0 ? (
                      "Not rated yet"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>
                  <span>
                    <i class="ri-map-pin-fill"></i>
                    {address}
                  </span>
                </div>
                <div className="hotel-extra-details">
                  <span>
                    {" "}
                    <i class="ri-map-pin-2-line"></i>
                    {city}{" "}
                  </span>
                  <span>
                    {" "}
                    <i class="ri-money-dollar-circle-line"></i>${price}/per
                    night{" "}
                  </span>
                  <span>
                    {" "}
                    <i class="ri-map-pin-time-line"></i>
                    {distance} k/m
                  </span>
                  <span>
                    {" "}
                    <i class="ri--line"></i>
                    {maxGroupsize} people
                  </span>
                </div>
                <h5>Descriptions</h5>
                <p>{desc}</p>

                {/* hotelreviews */}

                <div className="hotel-reviews mt-4">
                  <h4> Reviews ({reviews?.length} reviews) </h4>
                  <Form onSubmit={submitHandler}>
                    <div className="flex-layout align-items-center gap-3 mb-4 rating-group">
                      <span onClick={() => setHotelRating(1)}>
                        1<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setHotelRating(2)}>
                        {" "}
                        2<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setHotelRating(3)}>
                        3<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setHotelRating(4)}>
                        4 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setHotelRating(5)}>
                        5 <i class="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <div className="review-input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button
                        className="btn primary-btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user-reviews">
                    {reviews?.map((review) => (
                      <div className="review-item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-content-center justify-content-between">
                            <div>
                              <h5> Mokk</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing hotel experience</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="second-item">
            <Booking tour={tour} avgRating={avgRating} />
          </div>
        </section>
      </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default HotelDetails;
