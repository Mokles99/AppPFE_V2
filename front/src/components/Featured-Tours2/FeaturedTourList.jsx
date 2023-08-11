import React from "react";
import TourCard from "../../shared/TourCard2";
import tourData from "../../Assets/data/tours";
import { Col } from "reactstrap";
import { getHotels } from "../../actions/hotel.actions";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

const FeaturedTourList = () => {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);


  const { isLoading, data } = useQuery({
    queryKey: ["Hotels"],
    queryFn: () => dispatch(getHotels()),
    refetchOnMount: true,
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      {hotels?.map((hotel) => (
        <Col lg="3" className="mb-4" key={hotel.id}>
          <TourCard tour={hotel} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
