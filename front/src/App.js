import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from 'react-query';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import LayoutHome from "./components/Layouts/LayoutHome";
import LayoutEvent from "./components/Layouts/LayoutEvent";
import LayoutAbout from "./components/Layouts/LayoutAbout";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import Navbarr from "./components/Navbarr/Navbarr";
import Hotel from "./components/Hotel/Hotel";
import LayoutVole from "./components/Layouts/LayoutVole";
import Contact3 from "./components/Contact3/Talkus";
import Footer from "./components/Footer/Footer";
import HotelDetails from "./components/Hotel/Hotel-Details/HotelDetails";
import ThankYou from "./components/Hotel/ThankYou/ThankYou"
// import DestinationsList from "./components/Admins/Config/DestinationList";


import ContactsList from "./components/Admins/Config/ContactsList";

import TestsList from "./components/Admins/Testt/TestsList";
import NewTest from "./components/Admins/Testt/NewTest";
import UpdateTest from "./components/Admins/Testt/UpdateTest";
import Eventdetails from "./components/Evenements/DetailsEvent/Eventdetails"
import DestinationsList from "./components/Admins/Destination/DestinationsList";
import UsersList from "./components/Admins/User/UsersList";
import UpdateDestination from "./components/Admins/Destination/UpdateDestination";
import NewDestination from "./components/Admins/Destination/NewDestination";
import NewUser from "./components/Admins/User/NewUser";
import NewEvent from "./components/Admins/Eventt/NewEvent";
import EventsList from "./components/Admins/Eventt/EventsList";
import LoginGr from "./components/Gerant/LoginGr/LoginGr";
import UpdateEvent from "./components/Admins/Eventt/UpdateEvent";
import Admindash2 from "./components/Admindash2/Admindash2/Admindash2";
import Formulaireevent from "./components/Evenements/Formulaireevent/Formulaireevent";
import HotelsList from "./components/Admins/Hotel/HotelsList";
import NewHotel from "./components/Admins/Hotel/NewHotel";
import UpdateHotel from "./components/Admins/Hotel/UpdateHotel";
import Body from "./components/Admindash2/Body Section/Body";
import RegisterGr from "./components/Gerant/RegisterGr/RgisterGr.jsx"
import SideBar from "./components/Admins/Sidebar/SideBar";

import NewBloghome from "./components/Admins/Bloghome/NewBloghome"
import BloghomesList from "./components/Admins/Bloghome/BloghomesList"
import UpdateBloghome from './components/Admins/Bloghome/UpdateBloghome'
import SearchResultList from "./components/Hotel/SearchResultList/SearchResultList";

import OffresList from "./components/Admins/Offre/OffresList"
import UpdateOffre from "./components/Admins/Offre/UpdateOffre"
import NewOffre from "./components/Admins/Offre/NewOffre"
import GalleryeventsList from './components/Admins/Galleryevent/GalleryeventsList'
import NewGalleryevent from './components/Admins/Galleryevent/NewGalleryevent'
import FormulaireeventsList from "./components/Evenements/Formulaireevent/EventForm"
import FormulairedestsList from "./components/Main/FormulaireDestination/DestList"
import UpdateUser from "./components/Admins/User/UpdateUser";
import RolesList from "./components/Admins/Role/RolesList";
import BookingsList from "./components/Admins/Bookings/BookingsList";
import Updatebooking from "./components/Admins/Bookings/UpdateBooking";
// import BarsDashboard from "./components/Admins/Bar";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state?.auth);
  console.log(currentUser)
  const dispatch = useDispatch();

  let location = useLocation();
  const queryClient = new QueryClient();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);


  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <nav className="">
  
        <Navbarr/>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<LayoutHome />} />
          <Route path="/home" element={<LayoutHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/Hotel" element={<Hotel />} />
          <Route exact path="/EVEN" element={<LayoutEvent />} />
          <Route exact path="/About" element={<LayoutAbout />} />
          <Route exact path="/Vole" element={<LayoutVole />} />
          <Route exact path="/Contact3" element={<Contact3 />} />  
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route exact path="/tours/:id" element={<HotelDetails />} />
          <Route exact path="/thankyou" element={<ThankYou />} />
          {/* <Route exact path="/admindash" element={<MasterDash/>} /> */}

          <Route path="/admin/contacts" element={<ContactsList />} />
          {/* <Route path="/admin/bar" element={<BarsDashboard/>} /> */}

    

            <Route path="/admin/tests" element={<TestsList />} exact />
            <Route path="/admin/test/:id" element={<UpdateTest />} exact />
            <Route exact path="/test/new" element={<NewTest />} />

            <Route path="/admin/destinations" element={<DestinationsList />} exact />
            <Route path="/admin/bookings" element={<BookingsList />} exact />
            <Route path="/admin/users" element={<UsersList />} exact />
            <Route path="/admin/roles" element={<RolesList />} exact />

            <Route path="/admin/bloghomes" element={<BloghomesList />} exact />
            <Route path="/admin/hotels" element={<HotelsList />} exact />
            <Route path="/admin/events" element={<EventsList />} exact />
            <Route path="/admin/offres" element={<OffresList />} exact />
            <Route path="/admin/offre/:id" element={<UpdateOffre />} exact />

            <Route path="/admin/event/:id" element={<UpdateEvent />} exact />
            <Route path="/admin/destination/:id" element={<UpdateDestination />} exact />
            <Route path="/admin/booking/:id" element={<Updatebooking />} exact />
            <Route path="/admin/users/:id" element={<UpdateUser />} exact />
            <Route path="/admin/hotel/:id" element={<UpdateHotel />} exact />
            <Route path="/admin/bloghome/:id" element={<UpdateBloghome />} exact />

           
            <Route exact path="/search" element={<SearchResultList />} />

            <Route exact path="/destination/new" element={<NewDestination />} />
            <Route exact path="/user/new" element={<NewUser/>} />
            <Route exact path="/bloghome/new" element={<NewBloghome/>} />
            <Route exact path="/hotel/new" element={<NewHotel />} />
            <Route exact path="/event/new" element={<NewEvent />} />
            <Route exact path="/offre/new" element={<NewOffre />} />
           

            <Route path="/admin22" element={<Admindash2/>} />
            <Route path="/admin33" element ={<SideBar/>} />
            <Route path="/admin/body" element={<Body/>} />
            <Route path="/from" element={<Formulaireevent/>} />
            <Route path="/eventdetails/:eventId" element={<Eventdetails/>} />
            <Route path="/registergr" element={<RegisterGr/>} />
            <Route path="/logingr" element={<LoginGr/>} />
            <Route path="admin/event/gallery" element={<GalleryeventsList/>}/>
            <Route path="/galleryevent/new" element={<NewGalleryevent/>}/>
            <Route path="/admin/formulaireevent" element={<FormulaireeventsList/>}/>
            <Route path="admin/formulairedest" element={<FormulairedestsList/>}/>
        </Routes>
        <Footer />
      </div>
      </QueryClientProvider> 
      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
