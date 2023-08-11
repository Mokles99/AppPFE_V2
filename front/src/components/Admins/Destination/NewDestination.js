import React, { Fragment, useState, useEffect ,useNavigate} from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerImage from '../../../Assets/newdestination.jpg'
import { newDestination } from "../../../actions/destination.actions";
import { NEW_DESTINATION_RESET } from "../../../actions/constantes";
// import BannerImage from '../../assets/interior.jpg'
import "./NewProduct2.css";
import { Link } from "react-router-dom";
const NewDestination = ({ history }) => {
  const dispatch = useDispatch();
  

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;

    if (isNaN(val)) {
      setError("C'est pas un nombre");
    } else {
      setError("");
      setPrice(val);
    }
  };

  const { loading, success } = useSelector(
    (state) => state.newDestination
  );
  

  useEffect(() => {
    if (error) {
      alert(error);
    }

    if (success) {
      // history.push('/coachs');
      <Link to="/admin/destinations">Destination</Link>;
       alert("Destination created successfully");
      
      console.log("Destination created successfully");
      dispatch({ type: NEW_DESTINATION_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      location: location,
      price: price,
      images: images,
    };

    // const newProductData ={
    // title : title,
    // price : price ,
    // description : description ,
    // stock : stock ,
    // images : ""}

    dispatch(newDestination(formData));
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
      <div style={{paddingTop:"30vh" }} >  
        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4">New Destination</h1>

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
                    <label htmlFor="title_field">Title</label>
                  <input
                    type="text"
                    id="title_field"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                   <label htmlFor="location_field">Location</label>
                  <input
                    type="text"
                    id="location_field"
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                   <label htmlFor="price_field">Price</label>
                   <div>
                  <input
                    type="text"
                    id="price_field"
                    className="form-control"
                    value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                    onChange={handleInputChange}
                  />
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  </div>
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
                  style={{textAlign:"center"}}
                >
                  CREATE
                </button>
              </form>
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
