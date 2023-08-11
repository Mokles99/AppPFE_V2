import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newOffre } from "../../../actions/offre.actions";
import { NEW_OFFRE_RESET } from "../../../actions/constantes";
// import BannerImage from '../../assets/interior.jpg'
import "./NewProduct.css";
import { Link } from "react-router-dom";
const NewOffre = ({ history }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  const [pourcentage, setPourcentage] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector(
    (state) => state.newOffre
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }

    if (success) {
      // history.push('/coachs');
      <Link to="/tr">Offre</Link>;
      console.log("Offre created successfully");
      dispatch({ type: NEW_OFFRE_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      // description: description,
      pourcentage:pourcentage,
      price: price,
      images: images,
    };

    // const newProductData ={
    // title : title,
    // price : price ,
    // description : description ,
    // stock : stock ,
    // images : ""}

    dispatch(newOffre(formData));
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
                <h1 className="mb-4">New Offre</h1>

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
                  <label htmlFor="pourcentage_field">Pourcentage</label>
                  <input
                    type="text"
                    id="pourcentage_field"
                    className="form-control"
                    value={pourcentage}
                    onChange={(e) => setPourcentage(e.target.value)}
                  />
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

export default NewOffre;
