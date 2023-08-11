import React, {useEffect} from 'react'
import './Voletwo.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Voletwo = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='voletwo container section'>
        <div data-aos="fade-up" data-aos-duration="2500" className="voletwoContainer grid">
            <div  className="btns flex">
                <div className="singleBtn ">
                    <span>Economy</span>
                </div>
                <div className="singleBtn active">
                    <span>Business Class</span>
                </div>
                <div className="singleBtn">
                    <span>Fast Class</span>
                </div>
            </div>

            <div  data-aos="fade-up" data-aos-duration="2500" className="voletwoInputs flex">
                    {/* Single Input */}
                    <div className="voletwoInput flex">
                        <div className="voleiconDiv">
                            <HiOutlineLocationMarker className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder='Where do you want to go?'/>
                        </div>
                    </div>

                    {/* Single Input */}
                    <div className="voletwoInput flex">
                        <div className="voleiconDiv">
                            <RiAccountPinCircleLine className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Travelers</h4>
                            <input type="text" placeholder='Add guests'/>
                        </div>
                    </div>

                    {/* Single Input */}
                    <div className="voletwoInput flex">
                        <div className="voleiconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check In</h4>
                            <input type="text" placeholder='Add date'/>
                        </div>
                    </div>

                    {/* Single Input */}
                    <div className="voletwoInput flex">
                        <div className="voleiconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Add date'/>
                        </div>
                    </div>

                    <button className='btn btnBlock flex'>Search Flight</button>

            </div>
        </div>
    </div>
  )
}

export default Voletwo