import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import Sidebar from './Sidebar'

import { useDispatch, useSelector } from "react-redux";
import {
  updateBloghome,
  getBloghomeDetails,
} from "../../../actions/bloghome.actions";
import { UPDATE_BLOGHOME_RESET } from "../../../actions/constantes";
import { useNavigate } from "react-router-dom";

const UpdateBloghome = ({ history }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
 
  const [description, setDescription] = useState("");

  
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, bloghome } = useSelector(
    (state) => state.bloghomeDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.bloghome);

  const bloghomeId = id;

  useEffect(() => {
    if (bloghome && bloghome._id !== bloghomeId) {
      dispatch(getBloghomeDetails(bloghomeId));
    } else {
      setTitle(bloghome.title);
      setDescription(bloghome.description);

      //setStock(product.stock)
      setOldImages(bloghome.images);
    }

    if (error) {
      alert(error);
    }

    if (isUpdated) {
      navigate("/admin/bloghomes");
      alert("Bloghome updated successfully");
      dispatch({ type: UPDATE_BLOGHOME_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, bloghome, bloghomeId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      
      description: description,
      images: images,
    };

    dispatch(updateBloghome(bloghome._id, formData));
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
                <h1 className="mb-4">Update Bloghome</h1>

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
                  <label htmlFor="description_field">Description</label>
                  <textarea
                    className="form-control"
                    id="description_field"
                    rows="8"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

export default UpdateBloghome;
