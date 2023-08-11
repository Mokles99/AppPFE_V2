import React,{useState,useEffect}from "react";
import "./review.css";

import user1 from "../../Assets/user1.jpeg";
import user2 from "../../Assets/user2.jpeg";
import avis from "../../Assets/avevent.jpg"
import { RiMessage3Fill } from "react-icons/ri";
import axios from "axios";

function Review() {



  const [aviseventsList, setAviseventsList] = useState([]);
console.log(aviseventsList)
  useEffect(() => {
    const fetchAvisevents = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/avisevent/lister");
        setAviseventsList(data?.aviseventList)
      } catch (e) {
        console.log(e);
      }
    };

    fetchAvisevents();

    //setList2(data.avisevents);
  }, []);
  return (
    <div className="review section">
      <div className="secContainer-review">
        <span className="secTitle-review">
        <RiMessage3Fill className="icon" />
          What People Say</span>
          
        <div className="reviewContainer container grid">
        {aviseventsList.map((aviseventsItem, Key) => (
        <div className="singleReview">
          <div className="imgDiv">
            <img src={avis} />
          </div>
          <p>
          {aviseventsItem.message}
          </p>
          <div className="name">
            {aviseventsItem.name}
          </div>
        </div>
        ))}
          
        {/* <div className="singleReview">
          <div className="imgDiv">
            <img src={user2} />
          </div>
          <p>
            The event usually takes place over two weekends in the summer months
            of July or August, 
          </p>
          <div className="name">
            Nicolas
          </div>
        </div> */}
        {/* <div className="singleReview">
          <div className="imgDiv">
            <img src={user2} />
          </div>
          <p>
            The event usually takes place over two weekends in the summer months
            of July or August, 
          </p>
          <div className="name">
            Nicolas
          </div>
        </div> */}
        </div>
        

      </div>
    </div>
  );
}

export default Review;
