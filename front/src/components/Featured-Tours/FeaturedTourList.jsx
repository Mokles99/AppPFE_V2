import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../Assets/data/tours";
import { Col } from "reactstrap";
import { getHotels } from "../../actions/hotel.actions";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

const FeaturedTourList = () => {

  const dispatch = useDispatch()


const { isLoading , data } = useQuery({
    queryKey: ["Hotels"],
    queryFn: () => dispatch(getHotels()),
    refetchOnMount: true,
    onSuccess: ({ data }) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return <div>blank </div>;
};

export default FeaturedTourList;

/*  <>
  {
    tourData?.map(tour=>(
        <Col lg="3" className='mb-4' key={tour.id}>
            <TourCard tour={tour}/>
         </Col>
    ))
  }
  </> */
