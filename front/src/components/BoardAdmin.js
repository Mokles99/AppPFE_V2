import React, { useState, useEffect } from "react";
import '../BoardAdmin.css'
import { Link } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown';

//

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
///new
import { FaHome, FaRegCalendarAlt,FaHotel , FaBlogger, FaLocationArrow} from 'react-icons/fa';
import { CgProfile} from 'react-icons/cg'
import {GrUserSettings,GrGallery} from 'react-icons/gr'
import { MdEventAvailable} from 'react-icons/md'
import { TfiGallery} from 'react-icons/tfi'
import {RiUserSettingsLine} from 'react-icons/ri'
import DestinationsList from "./Admins/Destination/DestinationsList";


const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
  
///


//

  

  return (


    <div className="container">
      <header className="jumbotron" style={{paddingTop:'13vh'}}>
        <h1 style={{color:'GrayText',fontFamily:'Lucida Handwriting,cursive'}}>{content}</h1>
        
      </header>
    </div>
  );
};

export default BoardAdmin;


