import React, { useEffect, useState } from "react";
import "./body.css";
import Top from "../Top Section/Top";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import DestinationsList from "../../Admins/Destination/DestinationsList";
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx";

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import img from "../Assets/user (3).png";
import img2 from "../Assets/image (2).png";
import video from "../Assets/video.mp4";
import video2 from "../../../Assets/voole/video.mp4";

import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

import axios from "axios";

const Body = () => {
  const [statsList, setStatsList] = useState([]);
  const [statsoneList, setStatsoneList] = useState([]);
  const [bookingCounts, setBookingCounts] = useState([]);
  const [mostBookedHotel, setMostBookedHotel] = useState({
    mostBookedHotel: "",
    maxCount: 0,
  });
  const [mostBookedEvent, setMostBookedEvent] = useState({
    mostBookedEventTitle: "",
    count: 0,
  });
  const [mostBookedDest, setMostBookedDest] = useState({
    mostBookedDestinationTitle: "",
    count: 0,
  });
  const [hotelBookings, setHotelBookings] = useState([]);
  const [eventBookings, setEventBookings] = useState([]);
  const [destinationBookings, setDestinationBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const hotelRes = await axios.get(
          "http://localhost:8080/booking/dailyhotel"
        );
        const eventRes = await axios.get(
          "http://localhost:8080/formulaireevent/daylybook"
        );
        const destRes = await axios.get(
          "http://localhost:8080/formulairedest/daylybook"
        );

        setHotelBookings(hotelRes.data);
        setEventBookings(eventRes.data);
        setDestinationBookings(destRes.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchBookings();
  }, []);
  const dataline = [
    {
      id: "Hotels",
      data: hotelBookings,
    },
    {
      id: "Events",
      data: eventBookings,
    },
    {
      id: "Destinations",
      data: destinationBookings,
    },
  ];
  useEffect(() => {
    const fetchMostBookedDest = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/formulairedest/mostbookeddestination"
        );
        const responseData = response.data;
        setMostBookedDest(responseData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMostBookedDest();
  }, []);

  useEffect(() => {
    const fetchMostBookedEvent = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/formulaireevent/mostbookedevent"
        );
        const responseData = response.data;
        setMostBookedEvent(responseData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMostBookedEvent();
  }, []);
  useEffect(() => {
    const fetchBookingCounts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/booking/countbookings"
        );
        const responseData = response.data;

        const countsArray = Object.keys(responseData).map((hotel) => ({
          hotel,
          "Booking count": responseData[hotel],
        }));

        setBookingCounts(countsArray);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBookingCounts();
  }, []);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:8080/stat/count");
        const responseData = response.data;
        setStatsList([
          {
            id: "Hotels",
            label: "Hotels",
            value: responseData.hotels,
            color: "#fff",
          },
          {
            id: "Evenements",
            label: "Evenements",
            value: responseData.events,
            color: "#fff",
          },
          {
            id: "Destinations",
            label: "Destinations",
            value: responseData.destinations,
            color: "#fff",
          },
          {
            id: "Blogs",
            label: "Blogs",
            value: responseData.blogs,
            color: "hsl(100, 70%, 75%)",
          },
          {
            id: "Offres",
            label: "Offres",
            value: responseData.offres,
            color: "#fff",
          },
          {
            id: "Users",
            label: "Users",
            value: responseData.users,
            color: "#fff",
          },
        ]);
        console.log("mokkk", responseData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchStats();
  }, []);
  useEffect(() => {
    const fetchStatsone = async () => {
      try {
        const response = await axios.get("http://localhost:8080/statone/count");
        const responseData = response.data;
        setStatsoneList([
          {
            id: "Reservation Voyage",
            label: "Reservation Voyage",
            value: responseData.formulairedest,
            color: "hsl(100%, 70%, 50%)",
          },
          {
            id: "Reservation Event",
            label: "Reservation Event",
            value: responseData.formulaireevent,
            color: "hsl(100%, 70%, 80%)",
          },
        ]);
        console.log("mokkkkkk2", responseData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchStatsone();
  }, []);

  useEffect(() => {
    const fetchMostBookedHotel = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/booking/countbookingsby"
        );
        const responseData = response.data;
        setMostBookedHotel(responseData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMostBookedHotel();
  }, []);

  return (
    <div className="admindash2">
      <Sidebar />
      <div className="topSection">
        <div className="headerSection flex">
          <div className="title">
            <h1>Welcome to Oceana's World</h1>
            <p>Hello Admin , Welcome back </p>
          </div>

          <div className="adminDiv flex">
            <div className="adminImage">
              <img src={img} alt="Admin Image" />
            </div>
          </div>
        </div>

        <div className="cardSection flex">
          <div className="rightCard flex">
            <h1>Create and sell extraordinary </h1>
            <p>Remember that you are the world's travel king</p>

            <div className="buttons flex">
              <button className="btn transparent">Top Sellers</button>
            </div>

            <div className="videoDiv">
              <video src={video2} autoPlay loop muted></video>
            </div>
          </div>



        </div>


        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              border: "1px solid #000",
              borderRadius: "20px",
              padding: "20px",
              margin: "20px 0",
              textAlign: "center",
              width: "40%",
              height: "20vh",
              display: "flex",
              backgroundColor: "hsl(96 75% 89% / 1)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Most Booked Hotel</h2>
            <h3>{mostBookedHotel.mostBookedHotel}</h3>
            <p>{mostBookedHotel.maxCount} Bookings</p>
          </div>
          <div
            style={{
              border: "1px solid #000",
              borderRadius: "20px",
              padding: "20px",
              margin: "20px 0",
              textAlign: "center",
              width: "40%",
              height: "20vh",
              display: "flex",
              backgroundColor: "hsl(96 75% 89% / 1)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Most Booked Event</h2>
            <h3>{mostBookedEvent.mostBookedEventTitle}</h3>
            <p>{mostBookedEvent.count} Bookings</p>
          </div>
          <div
            style={{
              border: "1px solid #000",
              borderRadius: "20px",
              padding: "20px",
              margin: "20px 0",
              textAlign: "center",
              width: "40%",
              height: "20vh",
              display: "flex",
              backgroundColor: "hsl(96 75% 89% / 1)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Most Booked Destination</h2>
            <h3>{mostBookedDest.mostBookedDestinationTitle}</h3>
            <p>{mostBookedDest.count} Bookings</p>
          </div>
        </div>

        <div
          style={{
            // width: "40%",
            height: "50vh",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ResponsivePie
            data={statsList}
            margin={{ top: 40, right: 80, bottom: 80, left: 180 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            startAngle={-140}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#fff"
            colors={{scheme: "blues"}}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            legends={[
              {
                anchor: "left",
                direction: "column",
                justify: false,
                translateX: -180,
                translateY: 52,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#fff",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />

          <ResponsivePie
            data={statsoneList}
            margin={{ top: 40, right: 80, bottom: 80, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            startAngle={-100}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#fff"
            arcLinkLabelsThickness={2}
            colors={{scheme : 'paired'}}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "right",
                direction: "column",
                justify: false,
                translateX: 10,
                translateY: 70,
                itemsSpacing: 5,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#fff",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#fff",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
       
        <div className="charts-card" style={{ height: "340px", width:"100%",marginBottom:"20px",backgroundColor:"rgb(168,175,192)"}}>
          <ResponsiveBar
            data={bookingCounts}
            keys={["Booking count"]}
            indexBy="hotel"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={"#0073A8"}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "hotel",
              legendPosition: "middle",
              legendOffset: 32,
              tickTextColor: "#fff"
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Booking count",
              legendPosition: "middle",
              legendOffset: -40,
             
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            
            labelTextColor={"#fff"}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
        <div className="charts-card" style={{ height: "340px" ,width : '100%',marginBottom:"5px",backgroundColor:"rgb(168,175,192)" }}>
          <ResponsiveLine
            data={dataline}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Date",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Booking count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            colors={{ scheme: "nivo" }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
