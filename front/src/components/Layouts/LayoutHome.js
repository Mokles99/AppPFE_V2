import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import Main from "../Main/Main";

import Offer from "../Offers/Offer";
import WhyTravel from "../WhyTravel/WhyTravel";
import BlogDown from "../BlogDown/BlogDown";
import axios from "axios";

const Layout = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState({
    title: null,
    city: null,
    price: null,
  });

  const [destinations, setDestinations] = useState([]);

  const handleFilterChange = (e, key) =>
    setSearchTerms({ ...searchTerms, [key]: e.target.value });

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        let params = {};
        if (searchTerms.title) params.title = searchTerms.title;
        if (searchTerms.price) params.price = searchTerms.price;
        if (searchTerms.city) params.location = searchTerms.city;
        
        const { data } = await axios.get(
          `http://localhost:8080/destination/destinations`,
          { params }
        );
        setDestinations(data?.destinations);
        console.log({params})
      } catch (e) {
        console.log(e);
      }
    };
  
    fetchDestinations();
  }, [searchTerms]);
  return (
    <>
      <div>
        <Home
          handleFilterChange={handleFilterChange}
          searchTerms={searchTerms}
        />
        {/* <section style={{backgroundImage:'linear-gradient(0deg, rgba(16,181,189,1) 0%, rgba(255,255,255,1) 50%, rgba(0,132,179,1) 100%)'}}> */}
        <Main destinations={destinations} />
        <Offer />
        <WhyTravel />
        <BlogDown />
        {/* </section> */}
      </div>
      <main>{children}</main>
    </>
  );
};
export default Layout;
