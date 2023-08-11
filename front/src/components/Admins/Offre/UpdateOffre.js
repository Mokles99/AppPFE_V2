import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import Sidebar from './Sidebar'

import { useDispatch, useSelector } from "react-redux";
import {
  updateOffre,
  getOffreDetails,
} from "../../../actions/offre.actions";
import { UPDATE_OFFRE_RESET } from "../../../actions/constantes";
import { useNavigate } from "react-router-dom";

const UpdateOffre = ({ history }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  // const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [pourcentage,setPourcentage]=useState("")

  //const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, offre } = useSelector(
    (state) => state.offreDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.offre);

  const offreId = id;

  useEffect(() => {
    if (offre && offre._id !== offreId) {
      dispatch(getOffreDetails(offreId));
    } else {
      setTitle(offre.title);
      setPourcentage(offre.pourcentage);
      setPrice(offre.price);
      // setDescription(offre.description);

      //setStock(product.stock)
      setOldImages(offre.images);
    }

    if (error) {
      alert(error);
    }

    if (isUpdated) {
      navigate("/admin/offres");
      alert("Offre updated successfully");
      dispatch({ type: UPDATE_OFFRE_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, offre, offreId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      pourcentage:pourcentage,
      price: price,
      // description: description,
      images: images,
    };

    dispatch(updateOffre(offre._id, formData));
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
                <h1 className="mb-4">Update Offre</h1>

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

export default UpdateOffre;
