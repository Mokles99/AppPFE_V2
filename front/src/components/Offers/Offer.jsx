import React,{useEffect,useState} from "react";
import "./offer.css";
import { MdBathtub, MdKingBed } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import {BsArrowLeftShort} from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img from "../../Assets/img.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from "axios";



// const Offers = [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: "Machu Picchu",
//     location: "Peru",
//     price: "$3,200",
//   },
//   {
//     id: 2,
//     imgSrc: img,
//     desTitle: "Machu Picchu",
//     location: "Peru",
//     price: "$3,200",
//   },
//   {
//     id: 3,
//     imgSrc: img,
//     desTitle: "Machu Picchu",
//     location: "Peru",
//     price: "$3,200",
//   },
// ]






const Offer = () => {
  const [offresList, setOffresList] = useState([]);
console.log(offresList)
  useEffect(() => {
    const fetchOffres = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/offre/offres");
        setOffresList(data?.offres)
      } catch (e) {
        console.log(e);
      }
    };

    fetchOffres();

    //setList2(data.offres);
  }, []);

  //scral animation
  useEffect (()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <section className="section offer container section">
      <div className="secContainer-Offer">
        <div className="secIntro">
          <h2 data-aos="fade-right" className="secTitle">Special Offers</h2>
          <p data-aos="fade-right">
            From hitorical cities to natural spect , come see the best pf the
            world!
          </p>
         </div>
        
        <div data-aos="fade-up" className="mainContent grid">
          {/* {Offers.map(({id,imgSrc,destTitle,location,price}) => { */}
          {offresList.map((offresItem, Key) => (
  
              <div className="singleOffer">
                <div className="destImage">
                  {/* <img src={imgSrc} alt={destTitle} /> */}
                   <img src={offresItem.images[0]?.url}/>
                  <span className="discount">{offresItem.pourcentage}Off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{offresItem.price}</h4>
                    <span className="status">For Rent</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small> 2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small> 1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small> Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small> Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310, {offresItem.title}</small>
                  </div>
                  <Link to="/Contact3">
                   <button id="view" classeName="btnn flex">
                    More Info
                    <BsArrowRightShort className="icon" />
                  </button>
                  </Link>
                </div>
              </div>
            
          ))}
        </div>
        
      </div>
    </section>
  );
};
export default Offer;
