import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './UpdateDestination.css'
// import Sidebar from './Sidebar'

import { useDispatch, useSelector } from "react-redux";
import {
  updateDestination,
  getDestinationDetails,
} from "../../../actions/destination.actions";
import { UPDATE_DESTINATION_RESET } from "../../../actions/constantes";
import { useNavigate } from "react-router-dom";

const UpdateDestination = ({ history }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, destination } = useSelector(
    (state) => state.destinationDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.destination);

  const destinationId = id;

  useEffect(() => {
    if (destination && destination._id !== destinationId) {
      dispatch(getDestinationDetails(destinationId));
    } else {
      setTitle(destination.title);
      setLocation(destination.location);
      setPrice(destination.price);
      setDescription(destination.description);

      //setStock(product.stock)
      setOldImages(destination.images);
    }

    if (error) {
      alert(error);
    }

    if (isUpdated) {
      navigate("/admin/destinations");
      alert("Destination updated successfully");
      dispatch({ type: UPDATE_DESTINATION_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, destination, destinationId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      location: location,
      price: price,
      description: description,
      images: images,
    };

    dispatch(updateDestination(destination._id, formData));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);
    setOldImages([]);

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
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">{/* <Sidebar /> */}</div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5" style={{paddingTop:"11vh"}}>
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4" style={{width:"80% !important", margin:"1rem"}} >Update Destination</h1>

                <div className="formupdate" style={{width:"80% !important", margin:"1rem"}}>
                  <label htmlFor="title_field">Title</label>
                  <input
                    type="text"
                    id="title_field"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="formupdate" style={{width:"80% !important", margin:"1rem"}}>
                  <label htmlFor="location_field">Location</label>
                  <input
                    type="text"
                    id="location_field"
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="formupdate" style={{width:"80% !important", margin:"1rem"}}>
                  <label htmlFor="description_field">Description</label>
                  <textarea
                    className="form-control"
                    id="description_field"
                    rows="8"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="formupdate" style={{width:"80% !important", margin:"1rem"}}>
                  <label htmlFor="price_field">Price</label>
                  <input
                    type="number"
                    id="price_field"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>


                <div className="formupdate" style={{width:"80% !important", margin:"1rem"}}>
                  <label>Images</label>

                  <div className="custom-file">
                    <input
                      type="file"
                      name="product_images"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onChange}
                      multiple
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Images
                    </label>
                  </div>

                  {oldImages &&
                    oldImages.map((img) => (
                      <img
                        key={img}
                        src={img.url}
                        alt={img.url}
                        className="mt-3 mr-2"
                        width="55"
                        height="52"
                      />
                    ))}

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

                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                  style={{width:"80% !important", margin:"1rem" , position:"relative"}}
                >
                  UPDATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateDestination;
