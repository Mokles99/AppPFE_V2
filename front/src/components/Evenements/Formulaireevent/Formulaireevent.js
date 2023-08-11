import  React , {Fragment, useState } from  "react"
import { useContext } from "react";
import QRCode from "react-qr-code";
import "../../Contact3/Talkus.css"
// import { SelectedEventContext } from '../eventcontext';
  const Formulaireevent = (eventsItem) => {
      const [name,setName]=useState("")
      const [email,setEmail]=useState("") 
    
    const generateQR = () => {
        return name + ' ' + email ;
      };
    //   const { selectedEvent } = useContext(SelectedEventContext);

  
    return (
        <div className="formtalk grid">
          <h3>Send us an email</h3>
          <form className="formtalkus" action="">
              <h1>{eventsItem.title}</h1>
              <label>Title:
        <input type="text" value={eventsItem.title} disabled /></label>
            <input type="text" placeholder="Enter your Name" value={name} onChange={(e =>setName(e.target.value))}></input>
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e =>setEmail(e.target.value))}></input>
            <h1> Your Qrcode </h1>
            <QRCode value={generateQR()}/>
            <button  className="formBtn" type="submit" name="submit">
              Send 
            </button>
          </form>
        </div>
    )
};
export default Formulaireevent;