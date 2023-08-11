import React, {useEffect} from 'react'
import './Volethree.css'

import gridImage from '../../../Assets/voole/Images-Grid.png'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Volethree = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='support container section'>
         <div className="sectionContainer">
            <div  className="titlesDiv">
                <small>travel support</small>
                <h2>Plan your travel with confindence</h2>
                <p>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>

            <div className="infoDiv grid">
                <div className="textDiv grid">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
                        <span className="number">01</span>
                        <h4>Travel requirements for Dubai</h4>
                        <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
                        <span className="number colorOnevole">02</span>
                        <h4>Multi-risk travek insurance</h4>
                        <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
                        <span className="number colorTwovole">03</span>
                        <h4>Travel requirements by detination</h4>
                        <p>Find help with booking and travel plans, see what to expect along the journe to your favourite destinations!</p>
                    </div>

                </div>

                <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
                    <img src={gridImage} alt="" />
                </div>

            </div>
         </div>
    </div>
  )
}

export default Volethree