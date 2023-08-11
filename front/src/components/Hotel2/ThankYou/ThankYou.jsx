import React from 'react'
import './thankYou.css'
import { Container,Row,Col,Button } from 'reactstrap'
import { Link } from "react-router-dom"

const ThankYou = () => {
  return (
    <section>
        {/* <Container> */}
            <Col lg='12' className='pt-5 text-center'>
                <div className="thank__you">
                    <span><i class="ri-checkbox0circle-line"></i></span>
                    <h1 className="mb-3 fw-semibold">Thank You</h1>
                    <h3 className="mb-4">your desire is booked..</h3>
                    <Button className='btn primary__btn w-25'><Link to='/Hotel'> Back to Home</Link></Button>
                </div>
            </Col>
        {/* </Container> */}

    </section>
   
  )
}

export default ThankYou