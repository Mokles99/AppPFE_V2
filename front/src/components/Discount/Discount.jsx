import React from 'react'
import './Discount.css'
import video from  "../../Assets/Video2.mp4"







function Discount() {
  return (
    <div className='discount section'>
        <div className="secContainer">
            <video src={video} autoPlay loop muted type="mp4"></video>
             <div className="textDiv">
                <span className="title">
                    Sign Up for 10% Discount
                </span>
                <p>
                    Want to get an instat discount for your next tour to any of your favorite Events
                </p>
                 <div className="input_btn flex">
                    <input type="text" placeholder='Enter Your Email' />
                    <button className="btn">Submit</button>
                 </div>
             </div>
        </div>

    </div>
  )
}

export default Discount