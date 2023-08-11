import React,{useState,useEffect} from "react";
import CommonSection from "../../../shared/CommonSection";
// import '../../Components/Hotel/hotel.css'
import './hotels.css'
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../../../shared/SearchBar";
import TourCard from "../../../shared/TourCard";
import Newsletter from "../../../shared/Newsletter";
import tourData from "../../../Assets/data/tours";

const Hotels = () => {

  const[pageCount,setPageCount]=useState(0)
  const[page,setPage]=useState(0)
  console.log("hotels");

  useEffect(()=>{
    const pages = Math.ceil(5/ 4)
    setPageCount(pages)
  },[page])

  return (
    <>
      <CommonSection title={"All Hotels"} />
      <section className="pt-0">
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="part3" >

            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number=>(
                  <span key={number} onClick={()=>setPage(number)}
                  className={page==number ? 'active_page' : ""}
                  >
                    {number+1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        {/* */}
      </section>
      <Newsletter />
    </>
  );
};

export default Hotels;
