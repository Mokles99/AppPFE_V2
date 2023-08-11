import React from "react";
import { useState } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const navigateToHotel = () => {
    const params = new URLSearchParams();
    params.set("city", city);
    params.set("title", title);

    navigate(`/search?${params.toString()}`);
  };
  return (
    <Col lg="12">
      <div className="custom-search-section">
        {/* <Form className="d-flex align-items-center gap-4"> */}
        <Form className="form-glob">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                onChange={(e) => {
                  console.log(e.target.value);
                  setCity(e.target.value);
                }}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Title</h6>
              <input
                type="text"
                placeholder="Set a desire"
                onChange={(e) => {
                  console.log(e.target.value);
                  setTitle(e.target.value);
                }}
              />
            </div>
          </FormGroup>
          {/* <FormGroup className="d-flex gap-3 form__group form__group-last">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" />
                    </div>
                </FormGroup> */}
          <button
            className="search__icon"
            style={{color:"red"}}
            type="submit"
            onClick={navigateToHotel}
          >
            Search
          </button>
        </Form>
      </div>
    </Col>
  );
};
export default SearchBar;
