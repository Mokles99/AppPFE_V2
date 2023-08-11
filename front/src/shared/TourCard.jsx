import React ,{useEffect,useState}from 'react'
import {Card,CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import calculateAvgRating from '../utlis/avgRating'
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import './tour-card.css'


const TourCard = ({tour}) => {

    const{_id: id,title,city,price,images,featured,reviews} = tour
    const photo = images && images.length > 0 ? images[0].url : null;

    const {totalRating,avgRating} = calculateAvgRating(reviews)
     
    return (
        <>
    <div className='tour-card'>
        <Card>
            <div className="tour-imge">
                <img src={photo} alt="tour-img"/>
                {featured && <span>Featured</span>}
            </div>
            <CardBody >
            <div className="card-top d-flex align-items-center justify-content-between">
                <span className='tours-location d-flex align-items-center gap-1'>
                <i class="ri-map-pin-line"></i> {city}
                </span>
                <span className='tours-rating d-flex align-items-center gap-1'>
                <i class="ri-star-fill"></i> {avgRating == 0 ? null : avgRating} 
                {totalRating == 0 ? 'Not rated yet' : <span>({reviews.length})</span>}
                
                </span>

            </div>
            <h5 className='tour-title'><Link to={`/tours/${id}`}>{title}</Link></h5>
            <div className="card-buttom d-flex align-items-center justify-content-between mt-3">
                <h5>TND{price} <span> /per person </span></h5>
                <button className="booking-btn">
                    <Link to={`/tours/${id}`}>Book Now</Link>
                </button>

            </div>
        </CardBody>
        </Card>

    
      
        
    </div>            
    </> 
      
  )
}

export default TourCard