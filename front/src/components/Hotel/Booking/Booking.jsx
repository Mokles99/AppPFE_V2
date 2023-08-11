import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../../actions/bookinghotel.actions";
import { MenuItem, TextField } from "@mui/material";
const Booking = ({ tour, avgRating, hotelTitle }) => {
  const { price, reviews } = tour;
  const [priceChambre, setPriceChambre] = useState(0);
  const [priceHebr, setPriceHebr] = useState(0);
  const [priceSize, setPriceSize] = useState(0);
  const [night, setNight] = useState(1);
  const [chambretype, setChambretype] = useState("");
  const [hebrgtype, setHebergtype] = useState("");
  const [sizetype, setSizetype] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  let priceTotal = price + priceChambre + priceHebr + priceSize;
  let totalPay = priceTotal * night;

  const [credentials, setCredentials] = useState({
    // userId: user.id,
    userId: user?.id,
    email: "",
    fullName: "",
    // username: user.username,
    username: user?.username,
    hotelTitle: hotelTitle,
    night: night,
    priceChambre: priceChambre,
    priceHebr: priceHebr,
    priceSize: priceSize,
    totalpay: totalPay,
    phone: "",
    bookAt: "",
    status: "",
  });
  console.log(credentials);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  //send data to server

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign in to make a booking.");
      return;
    }

    const updatedCredentials = {
      ...credentials,
      night: night,
      priceChambre: priceChambre,
      priceHebr: priceHebr,
      priceSize: priceSize,
      chambretype: chambretype,
      hebrgtype: hebrgtype,
      sizetype: sizetype,
      totalpay: totalPay,
    };
    const data = await dispatch(
      createBooking(updatedCredentials, user.accessToken)
    );
    navigate("/thankyou");
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          <span> Starting from </span>
          {price} TND
        </h3>
        {/* <span className="tours-rating d-flex align-items-center ">
          <i class="ri-star-fill"></i>
          {avgRating == 0 ? null : avgRating} ({reviews?.length})
        </span> */}
      </div>
      {/* //bookingform */}

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Full"
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>

        {/* <select value={typeOfPrice} onChange={changeTypePrice} >
          <option value="1" >Chambre vue Jardain </option>
          <option value="2" >Chambre vue Mer</option>
        </select> */}

        {/* <TextField
          select
          label="choose your desire chambre"
          fullWidth
          onChange={(e) => setPriceChambre(e.target.value)}>
          <MenuItem value={tour.priceChJ}>
            Jardin vue - ${tour.priceChJ}
          </MenuItem>
          <MenuItem value={tour.priceChM}>Mer vue - ${tour.priceChM}
          </MenuItem>
        </TextField> */}
        <TextField
          select
          label="choose your desire chambre"
          fullWidth
          onChange={(e) => {
            const { price, type } = JSON.parse(e.target.value);
            setPriceChambre(price);
            setChambretype(type);
          }}
        >
          <MenuItem  value={JSON.stringify({ price: tour.priceChJ, type: "Vue jardin" })}>
            Jardin vue - TND{tour.priceChJ}
          </MenuItem>
          <MenuItem
            value={JSON.stringify({
              price: tour.priceChM,
              type: "Vue sur mer",
            })}
          >
            Mer vue - TND{tour.priceChM}
          </MenuItem>
        </TextField>

        <TextField
          select
          label="How many you are ?"
          fullWidth
          onChange={(e) => {
            const { price, type } = JSON.parse(e.target.value);
            setPriceSize(price);
            setSizetype(type);
          }}
        >
          <MenuItem value={JSON.stringify({price: tour.priceChsingle,type:"One person"})}>
            One person - TND{tour.priceChsingle}
          </MenuItem>
          <MenuItem value={JSON.stringify({price: tour.priceChtwo,type:"Two persons"})}>
            {" "}
            two persons - TND{tour.priceChtwo}
          </MenuItem>
          <MenuItem value={JSON.stringify({price: tour.priceChthree,type:"Three persons"})}>
            thre persons - TND{tour.priceChthree}
          </MenuItem>
        </TextField>

        <TextField
          select
          label="Choose your pack"
          fullWidth
            onChange={(e) => {
            const { price, type } = JSON.parse(e.target.value);
            setPriceHebr(price);
            setHebergtype(type); } }
        >
          <MenuItem value={JSON.stringify({price:tour.priceAll,type:"All in"})}>
            Hebergement all - TND{tour.priceAll}
          </MenuItem>
          <MenuItem value={JSON.stringify({price:tour.priceDemi,type:"Demi pension"})}>
            demi - TND{tour.priceDemi}</MenuItem>
        </TextField>
        <h5 className="d-flex align-items-center gap-1">
          {priceTotal} TND <i class="ri-close-line"></i> / night
        </h5>
        <TextField
          type="Number"
          inputProps={{ min: "1", max: "30", step: "1" }}
          label="how many nights"
          fullWidth
          onChange={(e) => setNight(e.target.value)}
        ></TextField>

        {/* <select >
          <option value="1" > Price All IN </option>
          <option value="2" > Price 1/2 Pension </option>
        </select> */}

        <div className="booking__bottom">
          <ListGroup>
            {/* <ListGroupItem className="border-0 px-0">
              <h5 className="d-flex align-items-center gap-1">
                ${priceTotal} <i class="ri-close-line"></i> / night
              </h5>
              <span>${priceTotal}</span>
            </ListGroupItem> */}

            {/* <ListGroupItem className="border-0 px-0">
              <h5>Service charge</h5>
              <span>${serviceFee}</span>
            </ListGroupItem> */}

            <ListGroupItem className="border-0 px-0 total">
              <h5>total</h5>
              <span>{totalPay} TND</span>
            </ListGroupItem>
          </ListGroup>

          {/* <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
            Book Now
          </Button> */}
          <Button className="btn primary__btn w-100 mt-4" onClick={handleClick} disabled={!user}>
        Book Now
      </Button>
      {!user && <p>Please sign in to make a booking.</p>}
        </div>
      </div>
    </div>
  );
};

export default Booking;
