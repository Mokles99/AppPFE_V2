import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newEvent } from "../../../actions/event.actions";
import { NEW_EVENT_RESET } from "../../../actions/constantes";
// import BannerImage from '../../assets/interior.jpg'
import "./NewProduct.css";
import { Link } from "react-router-dom";
const NewEvent = ({ history }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [places,setPlaces]=useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector(
    (state) => state.newEvent
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }

    if (success) {
      // history.push('/coachs');
      <Link to="/tr">Event</Link>;
      console.log("Event created successfully");
      dispatch({ type: NEW_EVENT_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      price: price,
      images: images,
      places:places
    };

    // const newProductData ={
    // title : title,
    // price : price ,
    // description : description ,
    // stock : stock ,
    // images : ""}

    dispatch(newEvent(formData));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      {/* <div className="row" style={{backgroundImage:'url('+BannerImage+')'}}> */}
      <div>
        <div className="col-12 col-md-2"></div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4">New Event</h1>

                <div className="form-group">
                  <label>Choose Image</label>

                  <div className="custom-file">
                    <input
                      type="file"
                      title="product_images"
                      className="custom-file-input form-control"
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
                      className="mt-3 mr-2"
                      width="55"
                      height="52"
                    />
                  ))}
                </div>

                <div className="form-group">
                  <label htmlFor="title_field">Title</label>
                  <input
                    type="text"
                    id="title_field"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
               
                <div className="form-group">
                  <label htmlFor="price_field">Price</label>
                  <input
                    type="text"
                    id="price_field"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="places_field">Places</label>
                  <input
                    type="number"
                    id="places_field"
                    className="form-control"
                    value={places}
                    onChange={(e) => setPlaces(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description_field">Description</label>
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
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                >
                  CREATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </>
  );
};

export default NewEvent;
