import React, {useEffect} from 'react'
import './Cards.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import cardImage1 from '../../Assets/cardImage1.png'
import cardImage2 from '../../Assets/cardImage2.png'
import cardImage3 from '../../Assets/cardImage3.png'
import cardImage4 from '../../Assets/cardImage4.png'
import card11 from '../../Assets/card11.jpg'
import card22 from '../../Assets/card22.jpg'
import card33 from '../../Assets/card33.jpg'
import card44 from '../../Assets/card44.jpg'
import {AiOutlineSwapRight} from 'react-icons/ai';

const Cards = () => {

  useEffect(() => {
    Aos.init({duration:2000})

  },[])
  return (



    <div className='cards'>
      <div  data-aos="zoom-out-left" data-aos-duration ='4000'  className="cardContainer container grid">
        <div   className="singleCard">
          <div className="imgDiv">
            <img src={card11} />
          </div>
          <h4 className="textDiv">
            Desert Event
          </h4>
        </div>

        <div  className="singleCard">
          <div className="imgDiv">
            <img src={card22} />
          </div>
          <h4 className="textDiv">
            Beach Festival
          </h4>
        </div>

        <div  className="singleCard">
          <div className="imgDiv">
            <img src={card33} />
          </div>
          <h4 className="textDiv">
          Hotel Events
          </h4>
        </div>

        <div  className="singleCard">
          <div className="imgDiv">
            <img src={card44} />
          </div>
          <h4 className="textDiv">
          Honeymoon
          </h4>
        </div>

      </div>
      <div className="spanText flex">
        HOT EVENTS Down <AiOutlineSwapRight className="icon" />
      </div> 

    </div>
  )
}

export default Cards