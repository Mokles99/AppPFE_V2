import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import "../../styles/SideBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader/Loader"
// import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvent } from '../../../actions/event.actions'
import { DELETE_EVENT_RESET } from '../../../actions/constantes'

  const EventsList = ({ history }) => {
  const dispatch = useDispatch();
  
  const { loading, error, events } = useSelector((state) => state.events);
  const { isDeleted } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getEvents());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Event deleted successfully");
      history.push("/admin/events");
      dispatch({ type: DELETE_EVENT_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const setEvents = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Title",
          field: "title",
          sort: "asc",
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
        },
        {
          label: "Description",
          field: "description",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    events.forEach((event) => {
      data.rows.push({
        id: event._id,
        title: event.title,
        description:event.description,
        price:event.price,
        //price: `$${product.price}`,
        //stock: product.stock,
        actions: (
          <Fragment>
            <Link
              to={`/admin/event/${event._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteEventHandler(event._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteEventHandler = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <Fragment>
      <div className="row">
        {/* <div className="col-12 col-md-2">
          <Sidebar />
        </div> */}

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Events</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setEvents()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default EventsList;
