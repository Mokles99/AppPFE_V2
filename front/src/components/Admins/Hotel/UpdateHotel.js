import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import Sidebar from './Sidebar'

import { useDispatch, useSelector } from "react-redux";
import {
  updateHotel,
  getHotelDetails,
} from "../../../actions/hotel.actions";
import { UPDATE_HOTEL_RESET } from "../../../actions/constantes";
import { useNavigate } from "react-router-dom";

const UpdateHotel = ({ history }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [address,setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [featured,setFeatured] = useState("");

  //const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, hotel } = useSelector(
    (state) => state.hotelDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.hotel);

  const hotelId = id;
console.warn('*/-*hotel',hotel)
  useEffect(() => {
    if (hotel && hotel._id !== hotelId) {
      dispatch(getHotelDetails(hotelId));
    } else {
      setTitle(hotel.title);
      setAddress(hotel.address);
      setPrice(hotel.price);
      setDesc(hotel.desc);
      setCity(hotel.city);
      setFeatured(hotel.featured);

      //setStock(product.stock)
      setOldImages(hotel.images);
    }

    if (error) {
      alert(error);
    }

    if (isUpdated) {
      navigate("/admin/hotels");
      alert("Hotel updated successfully");
      dispatch({ type: UPDATE_HOTEL_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, hotel, hotelId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      desc: desc,
      city:city,
      address:address,
      price: price,
      featured:featured,
      images: images,
    };

    dispatch(updateHotel(hotel._id, formData));
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
            <div className="wrapper my-5">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4">Update Hotel</h1>

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
                  <label htmlFor="city_field">City</label>
                  <input
                    type="text"
                    id="city_field"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address_field">Address</label>
                  <input
                    type="text"
                    id="address_field"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="desc_field">Description</label>
                  <textarea
                    className="form-control"
                    id="desc_field"
                    rows="8"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">Price</label>
                  <textarea
                    className="form-control"
                    id="price_field"
                    rows="8"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="featured_field">Featured</label>
                  <textarea
                    className="form-control"
                    id="featured_field"
                    rows="8"
                    value={featured}
                    onChange={(e) => setFeatured(e.target.value)}
                  ></textarea>
                </div>


                <div className="form-group">
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

export default UpdateHotel;
