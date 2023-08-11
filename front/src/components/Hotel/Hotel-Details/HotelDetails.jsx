import React, { useState, useRef,useEffect } from "react";
import "./hotelDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
//import tourData from '../../../Assets/data/tours'
import avatar from "../../../Assets/images/avatar.jpg";
import tourData from "../../../Assets/data/tours";
import calculateAvgRating from "../../../utlis/avgRating";

import Booking from "../Booking/Booking";
import Newsletter from "../../../shared/Newsletter";
import { useSelector } from "react-redux";
import axios from "axios";

const HotelDetails = () => {
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [hotelRating, setHotelRating] = useState(null);
  const [review, setReview] = useState("");
  const [reviwsList , setReviwsList] = useState([])

  

  const { hotels } = useSelector((state) => state.hotels);

  const tour = hotels.find((tour) => tour._id === id);

  //proprieties from hotel object
  const { images, title, desc, price, address, reviews, city, } = tour;
  console.log({title})

  console.log(tour)

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };
  //submit request to the server

 

  const getReviews = async () => {
    try {
      const response = await axios.get( `http://localhost:8080/review/reviewsByHotelId/${id}`,
      {
        headers: {
          "x-access-token": user.accessToken,
        },
      } ).then(res => {
        setReviwsList(res.data.reviewsHotel)
        console.warn('res',reviwsList)
      })
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
     getReviews()
  }, [])
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/review/${id}`,
        {
          username: user.username,
          idhotel : id,
          reviewText: review,
        },
        {
          headers: {
            "x-access-token": user.accessToken,
          },
        }
      );
      alert("Your review has been submitted successfully!");
      setReview("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section style={{ paddingTop: "13vh" }}>
        <Container>
          <section className="grid-layout">
            <div className="first-item">
              <div className="hotel-content">
                <img src={images[0]?.url} alt="" />

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
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>{price}DT /
                      night{" "}
                    </span>
                  </div>
                  <h5>Descriptions</h5>
                  <p>{desc}</p>
                  <div className="hotel-reviews mt-4">
                    <h4> Reviews ({reviews?.length} reviews) </h4>
                    <Form onSubmit={submitHandler}>
                      <div className="review-input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        />
                        <button
                          className="btn primary-btn text-white"
                          type="submit"
                          onClick={() => console.log(review)}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user-reviews">
                      {reviwsList?.map((review) => (
                        <div className="review-item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-content-center justify-content-between">
                              <div>
                                <h5> {review.username} </h5>
                                <p>
                                  {new Date().toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              {/* <span className="d-flex align-items-center">
                                5<i class="ri-star-s-fill"></i>
                              </span> */}
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-item">
              <Booking tour={tour} avgRating={avgRating} hotelTitle={title} />
            </div>
          </section>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default HotelDetails;
