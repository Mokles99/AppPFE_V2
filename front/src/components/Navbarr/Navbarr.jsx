import React, { useCallback, useEffect, useState } from "react";
import "./navbarr.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import logo from "../../Assets/logoocc.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearMessage } from "../../actions/message";
import { logout } from "../../actions/auth";
import EventBus from "../../common/EventBus";
import { MdOutlineLanguage } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import i18n from "../../i18n";

const Navbarr = () => {
  //lng
  const [language, setLanguage] = useState("fr");
  console.log(language);

  const handleChangeLanguage = (previousLanguage) => {
    i18n.changeLanguage(previousLanguage);
  };
  //lng
  const [active, setActive] = useState("navBar");
  //function toggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  //function remove navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleShow = () => {
    if (showDrop) {
      setShowDrop(false);
    } else {
      setShowDrop(true);
    }
  };
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
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={logo} alt="" />
            {/* <h1>
                     <MdOutlineTravelExplore className="icon" />  Oceana . </h1> */}
            {/* <h1>  */}
            {/* <SiYourtraveldottv className="icon"/>  */}
            {/* Oceana . </h1> */}
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/Home" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="/Hotel" className="navLink">
                Hotel
              </a>
            </li>
            <li className="navItem">
              <a href="/EVEN" className="navLink">
                Events
              </a>
            </li>
            <li className="navItem">
              <a href="/Vole" className="navLink">
                Fly with us
              </a>
            </li>
            <li className="navItem">
              <a href="/About" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="/Contact3" className="navLink">
                Contact
              </a>
            </li>

            <li className="navItem">
              <BsPersonCircle
                className="iconnav"
                onClick={() => handleShow()}
                

                
              />
              {showDrop ? (
                <div className="drop-down-items">
                  <ul>
                    {showModeratorBoard && (
                      <li className="nav-item">
                        <Link to={"/mod"} className="custom-link">
                          Moderator Board
                        </Link>
                      </li>
                    )}

                    {showAdminBoard && (
                      <li className="nav-item">
                        <Link to={"/admin/body"} className="custom-link">
                          Admin Board
                        </Link>
                      </li>
                    )}

                    {currentUser && (
                      <li className="nav-item">
                        <Link to={"/user"} className=" custom-link">
                          User
                        </Link>
                      </li>
                    )}
                    <li>
                      {" "}
                      {currentUser ? (
                        <div className="navbar-nav ml-auto">
                          <li className="nav-item">
                            <Link to={"/profile"} className=" custom-link">
                              {currentUser.username}
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a
                              href="/logingr"
                              className=" custom-link"
                              onClick={logOut}
                            >
                              LogOut
                            </a>
                          </li>
                        </div>
                      ) : (
                        <div className="navbar-nav ml-auto">
                          <button className="btn">
                            <a href="/logingr">Get in Touch ¶</a>
                          </button>
                          <button className="btn">
                            <a href="/registergr">Sign Up ¶</a>
                          </button>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              ) : (
                true
              )}
            </li>

            <li>
              <MdOutlineLanguage
                className="iconnav"
                onClick={() => {
                  if (language === "fr") {
                    setLanguage("en");
                    handleChangeLanguage("en");
                  } else {
                    setLanguage("fr");
                    handleChangeLanguage("fr");
                  }
                }}
              />
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbarr;
