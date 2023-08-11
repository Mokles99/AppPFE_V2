import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import Sidebar from './Sidebar'

import { useDispatch, useSelector } from "react-redux";
import {
  
updateBooking,getSingleBooking
} from "../../../actions/bookinghotel.actions";
import { UPDATE_BOOKING_RESET } from "../../../actions/constantes";
import { useNavigate } from "react-router-dom";

const Updatebooking = ({ history }) => {
  const navigate = useNavigate();


  
  const [hoteltitle,setHoteltitle] = useState("");
  const [night, setNight] = useState("");
  const [pricech,setPricech] = useState("");
  const [pricehebr,setPricehebr] = useState("");
  const [pricesize,setPricesize] = useState("");
  const [totalpay,setTotalpay] = useState("");

  //const [stock, setStock] = useState(0);


  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, booking } = useSelector(
    (state) => state.bookingDetails
  );
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.booking);

  const bookingId = id;

  useEffect(() => {
    if (booking && booking._id !== bookingId) {
      dispatch(getSingleBooking(bookingId));
    } else {
     
      setNight(booking.night)
      setPricech(booking.priceChambre)
      setPricehebr(booking.priceHebr)
      setPricesize(booking.priceSize)
      setTotalpay(booking.totalPay)
      setHoteltitle(booking.hotelTitle);
     

      //setStock(product.stock)
    }

    if (error) {
      alert(error);
    }

    if (isUpdated) {
      navigate("/admin/bookings");
      alert("Hotel updated successfully");
      dispatch({ type: UPDATE_BOOKING_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, booking, bookingId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
   
    hoteltitle:hoteltitle,
  night:night,
 pricech:pricech,
  pricehebr:pricehebr,
  pricesize:pricesize,
  totalpay:totalpay,

    };

    dispatch(updateBooking(booking._id, formData));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    // setImagesPreview([]);
    // setImages([]);
    // setOldImages([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagesPreview((oldArray) => [...oldArray, reader.result]);
    //       setImages((oldArray) => [...oldArray, reader.result]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
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
                  <label htmlFor="city_field">Hotel</label>
                  <input
                    type="text"
                    id="hotel_field"
                    className="form-control"
                    value={hoteltitle}
                    onChange={(e) => setHoteltitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address_field">Nights</label>
                  <input
                    type="text"
                    id="night_field"
                    className="form-control"
                    value={night}
                    onChange={(e) => setNight(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="desc_field">Price Chambre</label>
                  <textarea
                    className="form-control"
                    id="pricech_field"
                    rows="8"
                    value={pricech}
                    onChange={(e) => setPricech(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">Price Hebr</label>
                  <textarea
                    className="form-control"
                    id="pricehebr_field"
                    rows="8"
                    value={pricehebr}
                    onChange={(e) => setPricehebr(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="featured_field">Price size</label>
                  <textarea
                    className="form-control"
                    id="featured_field"
                    rows="8"
                    value={pricesize}
                    onChange={(e) => setPricesize(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="featured_field">Total pay</label>
                  <textarea
                    className="form-control"
                    id="featured_field"
                    rows="8"
                    value={totalpay}
                    onChange={(e) => setTotalpay(e.target.value)}
                  ></textarea>
                </div>



                {/* <div className="form-group">
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
                </div> */}

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

export default Updatebooking;
