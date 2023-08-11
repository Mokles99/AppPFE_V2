import React, { useEffect, useState } from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import Modaldest from "./FormulaireDestination/Modaldest";
import { useSelector } from "react-redux";
// const dataDestination = [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: " Bora Bora ",
//     location: "Sousse",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance,Bora Bora is one the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.  ",
//   },
//   {
//     id: 2,
//     imgSrc: img2,
//     destTitle: " Bora Bora ",
//     location: "Sousse",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance,Bora Bora is one the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.  ",
//   },
//   {
//     id: 3,
//     imgSrc: img3,
//     destTitle: " Bora Bora ",
//     location: "Sousse",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance,Bora Bora is one the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.  ",
//   },
//   {
//     id: 4,
//     imgSrc: img4,
//     destTitle: " Bora Bora ",
//     location: "Sousse",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance,Bora Bora is one the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.  ",
//   },
//   {
//     id: 5,
//     imgSrc: img5,
//     destTitle: " Bora Bora ",
//     location: "Sousse",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance,Bora Bora is one the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.  ",
//   },
//   {
//     id: 6,
//     imgSrc: img6,
//     destTitle: " Bora Bora ",
//     location: "Sousse",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance,Bora Bora is one the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.  ",
//   },
// ];
const Main = ({destinations}) => {
  //scral animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [open, setOpen] = useState(false);
  const [destinationTitle, setDestinationTitle] = useState("")
  const { user } = useSelector((state) => state.auth);

  const handleClickOpen = (title) => {
    if (user) {
      setOpen(true);
    } else {
      alert("You must be logged in to reserve");
    }
    setDestinationTitle(title)
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="titledest">
          <MdOutlineTravelExplore className="icon" />
          Most visited destinations ...
        </h3>
      </div>

      <div className="secContent grid">
        {destinations.map(
          (destination, index) => {
            return (
              <div key={index} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={destination.images[0]?.url} alt={destination.title} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destination.title}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{destination.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                      CULTURAL RELAX
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{destination.price} TND</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{destination.description}</p>
                  </div>

                  <button className="btn flex" onClick={() => handleClickOpen(destination.title)} >
                    RESERVE <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
      <Modaldest open={open} handleClose={handleClose} destinationTitle={destinationTitle} />
    </section>
  );
};

export default Main;
