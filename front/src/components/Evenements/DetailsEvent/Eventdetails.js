import React, { useEffect, useState } from "react";
import axios from "axios";
// import BannerImage from "../assets/detailsrpm2.png";
import "./Detailsrpm.css";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineInfo } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getEventDetails } from "../../../actions/event.actions";
import Modalevent from "../Formulaireevent/Modalevent";

// import BannerImage1 from "../assets/slider6.jpeg";

function Eventdetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchEventDetaills = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/event/event/${eventId}`
        );
        setIsLoading(false);
        setEvent(data.event);
      } catch (e) {
        console.log(e);
      }
    };
    fetchEventDetaills();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (user) {
      setOpen(true);
    } else {
      alert("You must be logged in to book a pass");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) return <h2>Loading ...</h2>;

  return (
    <div className="container">
      {/* <div
        class="background-title"
        style={{ backgroundImage: "url(" + BannerImage1 + ")" }}
      >
        <h1 className="details-title">RPM™</h1>
        <div className="under-title"> Courses / RPM™ / About RPM™ </div>
      </div> */}
      {/* <div className="section-title">
        <h1>LE RPM™ EST PLUS FACILE QUE LE VÉLO</h1>
        <br></br>
        <div className="section-title-border"></div>
      </div> */}
      <img
        src={event?.images[0]?.url}
        style={{
          borderRadius: "50px",
          paddingTop: "13vh",
          height: "70vh",
          width: "100vh",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
        }}
      />
      <div className="section-description">
        {/* <p style={{marginBottom:"30px"}}>{event.description}</p> */}
        <p
          style={{
            display: "flex",
            marginBottom: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
            fontSize: "2em",
            fontFamily: "Brush Script MT, Lucida Handwriting, Cursive",
          }}
        >
          {" "}
          {event.title}
        </p>
        <p
          style={{
            display: "flex",
            marginBottom: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
            fontSize: "2em",
            fontFamily: "Monaco, Monospace",
          }}
        >
          {" "}
          {event.price} TND{" "}
        </p>
        <p
          style={{
            display: "flex",
            color:"gray",
            marginBottom: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {event.description}
        </p>
      </div>
      <div className="section-img">{/* <img src={BannerImage} /> */}</div>
      <div className="section-centent">
        {/* <p>{event.description}</p> */}
        <p>
          Immerse yourself in the excitement, delight in the enchanting music,
          dance with vibrant souls. This is more than an event, it's a
          transcendent escape. Join us, let your spirit thrive, and create
          unforgettable memories. Your adventure awaits!
        </p>
      </div>

      <div className="section-info">
        <div className="section-info-1">
          <div className="section-title">
            <h3>
              {" "}
              <BsEmojiSmile></BsEmojiSmile> Participation in our events
            </h3>
            <br></br>
            <div className="section-title-border"></div>
          </div>

          <ul className="section-info-centent">
            <li>• Explore new cultural horizons</li>
            <li>• Forge priceless connections</li>
            <li>• Get stimulated by the collective energy</li>
            <li>• Make memories etched in your heart forever</li>
          </ul>
        </div>
        <div className="section-info-2">
          <Button onClick={handleClickOpen} disabled={event.places === 0}>
            {" "}
            {event.places === 0 ? "Out of Places" : "Get Pass"}{" "}
          </Button>
          <div className="section-title">
            <h3>
              {" "}
              <AiOutlineInfo></AiOutlineInfo> First time ?
            </h3>
            <br></br>
            <div className="section-title-border"></div>

            <p className="section-info-centent">
              Embrace the new. Immerse yourself in vibrant energy, connect with
              diverse souls, and indulge in unforgettable melodies. Your first
              festival is a magical journey. Be open, explore, and create
              lasting memories
            </p>
          </div>
        </div>
      </div>
      <Modalevent
        open={open}
        handleClose={handleClose}
        title={event.title}
        price={event.price}
        eventId={eventId}
      />
    </div>
  );
}

export default Eventdetails;
