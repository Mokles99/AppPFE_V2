import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newHotel } from "../../../actions/hotel.actions";
import { NEW_HOTEL_RESET } from "../../../actions/constantes";
// import BannerImage from '../../assets/interior.jpg'
import "./NewProduct.css";
import { Link } from "react-router-dom";



const NewHotel = ({ history }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [priceChM, setPriceChM] = useState("");
  const [priceChJ, setPriceChJ] = useState("");
  const [priceDemi, setPriceDemi] = useState("");
  const [priceAll, setPriceAll] = useState("");
  const [priceChsingle,setPriceChsingle]=useState("");
  const [priceChtwo,setPriceChtwo]=useState("");
  const [priceChthree,setPriceChthree]=useState("");
  const [address,setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [featured,setFeatured] = useState("");

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector(
    (state) => state.newHotel
  );

  useEffect(() => {
    if (error) {
      alert(error);
      console.log('mok',error)
    }

    if (success) {
      // history.push('/coachs');
      <Link to="/admin/hotels">Hotel</Link>;
      console.log("Hotel created successfully");
      alert("Hotel created successfully");
      dispatch({ type: NEW_HOTEL_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      desc: desc,
      city:city,
      address:address,
      price: price,
      priceChJ:priceChJ,
      priceChM:priceChM,
      priceDemi:priceDemi,
      priceAll:priceAll,
      priceChsingle:priceChsingle,
      priceChtwo:priceChtwo,
      priceChthree:priceChthree,
      featured:featured,
      images: images,
    };

    // const newProductData ={
    // title : title,
    // price : price ,
    // description : description ,
    // stock : stock ,
    // images : ""}

    dispatch(newHotel(formData));
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
                <h1 className="mb-4">New Hotel</h1>

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
                  <label htmlFor="price_field">PriceChJardin</label>
                  <input
                    type="text"
                    id="pricechj_field"
                    className="form-control"
                    value={priceChJ}
                    onChange={(e) => setPriceChJ(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">PriceChMer</label>
                  <input
                    type="text"
                    id="pricechm_field"
                    className="form-control"
                    value={priceChM}
                    onChange={(e) => setPriceChM(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">PriceDemi</label>
                  <input
                    type="text"
                    id="pricedemi_field"
                    className="form-control"
                    value={priceDemi}
                    onChange={(e) => setPriceDemi(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">PriceALLin</label>
                  <input
                    type="text"
                    id="priceall_field"
                    className="form-control"
                    value={priceAll}
                    onChange={(e) => setPriceAll(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">Price Chambre à 3</label>
                  <input
                    type="text"
                    id="pricech3_field"
                    className="form-control"
                    value={priceChthree}
                    onChange={(e) => setPriceChthree(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">Price Chambre à 2</label>
                  <input
                    type="text"
                    id="pricech2_field"
                    className="form-control"
                    value={priceChtwo}
                    onChange={(e) => setPriceChtwo(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">Price Chambre single</label>
                  <input
                    type="text"
                    id="pricechsingle_field"
                    className="form-control"
                    value={priceChsingle}
                    onChange={(e) => setPriceChsingle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description_field">Description</label>
                  <textarea
                    className="form-control"
                    id="desc_field"
                    rows="8"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="address_field">Address</label>
                  <textarea
                    className="form-control"
                    id="address_field"
                    rows="8"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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

export default NewHotel;
