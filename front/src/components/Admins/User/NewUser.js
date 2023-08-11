import React, { Fragment, useState, useEffect ,useNavigate, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

// import BannerImage from '../../assets/interior.jpg'
import "./NewProduct2.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";
import { register } from "../../../actions/auth";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
const NewDestination = () => {
  
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
  
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      setSuccessful(false);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        dispatch(register(username, email, password))
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          });
      }
    };

  return (
    <>
      {/* <div className="row" style={{backgroundImage:'url('+BannerImage+')'}}> */}
      <div style={{paddingTop:"30vh" }} >  
        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
            
                <div className="form-group">
                  
                <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
          <div
            action=""
            className="form grid"
            style={{ margin: "1px !important" }}
          >
            <div className="inputDiv" style={{ margin: "1px !important" }}>
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <Input 
                type="text"
               
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]} />
              </div>
            </div>
            
            <div className="inputDiv" style={{ margin: "1px !important" }}>
              <label htmlFor="password">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <Input  
                type="text"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]} />
              </div>
            </div>
            <div className="inputDiv" style={{ margin: "1px !important" }}>
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <Input
                  type="password"
                //   className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
            </div>
            <button type="submit" className="btn flex">
              <span>Create </span>
              <AiOutlineSwapRight className="icon" />
            </button>
          
          </div>
          )}
          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
                  
                    
                </div>
            </div>
          </Fragment>
        </div>

      </div>

{/* <div className="popup">
  <h1 className="title">New Destination</h1>
  <form className="form" onSubmit={submitHandler} encType="multipart/form-data">
    <div className="form-group">
      <label className="label">Choose Image</label>
      <div className="custom-file">
        <input
          type="file"
          title="product_images"
          className="custom-file-input"
          id="customFile"
          onChange={onChange}
          multiple
        />
      </div>
      {imagesPreview.map((img) => (
        <img
          src={img}
          key={img}
          alt="Images Preview"
          className="image-preview"
          width="55"
          height="52"
        />
      ))}
    </div>
    <div className="form-group">
      <label className="label" htmlFor="title_field">Title</label>
      <input
        type="text"
        id="title_field"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label className="label" htmlFor="location_field">Location</label>
      <input
        type="text"
        id="location_field"
        className="form-control"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label className="label" htmlFor="price_field">Price</label>
      <input
        type="text"
        id="price_field"
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label className="label" htmlFor="description_field">Description</label>
      <textarea
        className="form-control"
        id="description_field"
        rows="8"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
    <button
      id="login_button"
      onClick={submitHandler}
      className="btn"
      disabled={loading ? true : false}
    >
      CREATE
    </button>
  </form>
</div> */}

    </>
  );
};

export default NewDestination;
