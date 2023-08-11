import React, { useEffect, useState } from "react";
import CommonSection from "../../../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../../../shared/TourCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchResultList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");
  const title = queryParams.get("title");
  const { hotels } = useSelector((state) => state.hotels);
  const hotelSearch = hotels?.filter((hotel) => {
    const hotelCity = hotel.city?.toLowerCase();
    const hotelTitle = hotel.title?.toLowerCase();
    console.log(hotelCity);
    console.log(hotelTitle);
    const checkcity = hotelCity.includes(
      city === "" ? false : city.toLowerCase()
    );
    const checktitle = hotelTitle.includes(
      title === "" ? false : title.toLowerCase()
    );
    console.log(checkcity);
    console.log(checktitle);

    return checkcity || checktitle;
  });
  console.log(hotelSearch);

  return (
    <>
      <CommonSection title={"Hotel Search Result"} />
      <section>
        <Container>
          <Row>
            {hotelSearch?.length <= 0 ? (
              <h4 className="text-center">No hotel found</h4>
            ) : (
              hotelSearch?.map((hotel) => (
                <Col lg="3" className="mb-4" key={hotel._id}>
                  <TourCard tour={hotel} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
