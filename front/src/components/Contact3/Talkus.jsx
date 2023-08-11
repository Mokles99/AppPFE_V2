import React ,{useRef,useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Talkus.css";
import emailjs from '@emailjs/browser';
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger, BsTwitter } from "react-icons/bs";

import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import LeafletGeocoder from "./LeafletGeocoder/LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine/LeafletRoutingMachine";

import {addContactAction,
  
  listerContact} from "../../actions/contact.actions"

const Contact3 = () => {
  
  const position = [35.821430, 10.634422]  
  const form = useRef();

  function sendEmail(e) {
    
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_i7mlegi', form.current, 'NskYw7W4CUqilCk7_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const addContact = async () => {
    const data = {
      name,
      email,
      message,
    };
    await dispatch(addContactAction(data));
    await dispatch(listerContact());
    setEmail("");
    setMessage("");
    setName("");
  };
  
  return (
    <section id="talk" className="talk section container">
      <div className="talkContainer grid">
        <div className="socialtalk grid">
          <h3>Talk to us</h3>
          <div className="cardstalk grid">
            <div className="cardtalk">
              <div>
                <BsInstagram className="icon" />
              </div>
              <h4>Instagram</h4>
              <span className="userName">@MOKLES_MBAREK</span>
              <div>
                <a href="" className="flex">
                  Send Message
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="cardtalk">
              <div>
                <AiOutlineWhatsApp className="icon" />
              </div>
              <h4>Whats-APP</h4>
              <span className="userName">+216 22461046</span>
              <div>
                <a href="" className="flex">
                  Call us
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="cardtalk">
              <div>
                <BsMessenger className="icon" />
              </div>
              <h4>Messnger</h4>
              <span className="userName">@MOKLES_MBAREK</span>
              <div>
                <a href="" className="flex">
                  Call us
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="cardtalk">
              <div>
                <BsTwitter className="icon" />
              </div>
              <h4>Twitter</h4>
              <span className="userName">@MOKLES_MBAREK</span>
              <div>
                <a href="" className="flex">
                  Send Message
                  <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="formtalk grid">
          <h3>Send us an email</h3>
          <form className="formtalkus" action="">
            <input type="text"  value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }} placeholder="Enter your Name"></input>
            <input type="email" value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
            placeholder="Enter your Email"></input>
            <textarea
              name="message"
              value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              placeholder="Enter your message"
            ></textarea>
            <button  onSubmit={sendEmail}  onClick={addContact} ref={form} className="formBtn" type="submit" name="submit" 
            style={{
              display: 'block !important',
              margin: 'auto!important',
              width: '90%!important',
              border: 'none !important',
              // padding: '1rem 0 !important',
              borderRadius: '20px !important',
              fontSize: '17px !important',
              background: 'hsl(187,85%,43%)',
              color: 'var(--BgColorContact)',
              fontWeight: '600 !important',
              cursor: 'pointer'
          }}>
              Send Email
            </button>
          </form>
        </div>
      </div>
      {/* <div className="maptalk">
        <iframe
        title="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51757.48343061744!2d10.6180544!3d35.82833455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275759ac9d10d%3A0x698e3915682cef7d!2sSousse!5e0!3m2!1sfr!2stn!4v1680643569716!5m2!1sfr!2stn"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
    {/* <LeafletGeocoder/> */}
    <LeafletRoutingMachine/>
  </MapContainer>
    </section>
  );
};
let DefaultIcon=L.icon({
  iconUrl:"https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize:[25,41],
  iconAnchor:[10,41],
  popupAnchor:[2,-40]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Contact3;
