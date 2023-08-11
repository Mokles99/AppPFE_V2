import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../../Assets/images/weather.png'
import guideImg from '../../Assets/images/guide.png'
import customizationImg from '../../Assets/images/customization.png' 
import "../Hotel/hotel.css"

const servicesData =[
  { imgUrl:weatherImg,
  title:"Calculate Weather",
  desc:"Estimate weather with our platform's integrated forecast tool."
  
}, 
{ imgUrl:guideImg,
  title:"Best Tour Guide",
  desc:"Access top local guides for an authentic travel experience."
  
},
{ imgUrl:customizationImg,
  title:"Customization",
  desc:"Personalize your journey with our customizable travel planning tool."
  
},
]



const ServicesList = ()=> {
  return (<>  

  {servicesData.map((item,index)=>(
  <Col className="col-padding" key={index}>
        <ServiceCard item={item} />
      </Col>
    ))}
  </>
    
  )
}

export default ServicesList