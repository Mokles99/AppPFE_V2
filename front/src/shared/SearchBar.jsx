import React from "react"
import { useState, useEffect, useRef } from "react";
import './search-bar.css'
import{Col,Form,FormGroup} from "reactstrap"
import { useNavigate } from "react-router";
import {MdLocationOn} from "react-icons/md"
const SearchBar = () => {


    const cityRef= useRef('')
    const titleRef = useRef('')
    const maxGroupSizeRef = useRef(0)


    const navigate = useNavigate()


    const searchHandler = async() =>{
        const city = cityRef.current.value
        const title = titleRef.current.value
        // const maxGroupSize = maxGroupSizeRef.current.value
        // console.log(location)
        // console.log(distance)
        // console.log(maxGroupSize)

        // if(location && distance && maxGroupSize){
        //     window.location.href = `/search?location=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
        // }else{
        //     alert('Please fill all the fields')
        // }

        const res= await fetch (`http://localhost:8080/hotel/search/searchByTitleAndCity?city=${city}&title=${title}`)
        if(!res.ok) alert('Something went wrong')

        const result = await res.json()
        navigate(`hotels/search?city=${city}&title=${title}`,{state: result.data})
    }
    return(
        <Col lg='12'>
         <div className="custom-search-section">
            {/* <Form className="d-flex align-items-center gap-4"> */}
            <Form className="form-glob" style={{margin:"0 !important"}}>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    {/* <span><i class="ri-map-pin-line"></i></span> */}
                    <span> <MdLocationOn className="icon"/> </span>
                    <div>
                        <h6>Location</h6>
                        <MdLocationOn className="icon"/>
                        <input type="text" placeholder="Where are you going?" ref={cityRef}/>
                        
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Title</h6>
                        <input type="text" placeholder="Set a desire" ref={titleRef} />
                    </div>
                </FormGroup>
                {/* <FormGroup className="d-flex gap-3 form__group form__group-last">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" />
                    </div>
                </FormGroup> */}
                <button className="search__icon"  type="submit" onClick={searchHandler}>Search</button>
            </Form>

         </div>

        </Col>
    )
}
export default SearchBar;