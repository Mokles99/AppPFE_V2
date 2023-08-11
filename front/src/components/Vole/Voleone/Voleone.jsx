import React from 'react'
import './Voleone.css'


import video from '../../../Assets/voole/video.mp4'
import aeroplane from '../../../Assets/voole/takeOff.png'



const Voleone = () => {
  return (
    <div className='voleone flex container'>
        <div className="voleonemainText">
            <h1>Create Ever-lasting Memories With Us</h1>
        </div> 
        <div className="mainImages flex">
          <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          </div>
          <img src={aeroplane} className="plane" alt="Image" />
          
        </div>
    </div>
  )
}

export default Voleone