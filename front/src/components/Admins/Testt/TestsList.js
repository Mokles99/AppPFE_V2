import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import "../../styles/SideBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader/Loader"
// import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { getTests, deleteTest } from '../../../actions/test.actions'
import { DELETE_TEST_RESET } from '../../../actions/constantes'

  const TestsList = ({ history }) => {
  const dispatch = useDispatch();
  
  const { loading, error, tests } = useSelector((state) => state.tests);
  const { isDeleted } = useSelector((state) => state.test);

  useEffect(() => {
    dispatch(getTests());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Test deleted successfully");
      history.push("/admin/tests");
      dispatch({ type: DELETE_TEST_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const setTests = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
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

    tests.forEach((test) => {
      data.rows.push({
        id: test._id,
        name: test.name,
        description:test.description,
        //price: `$${product.price}`,
        //stock: product.stock,
        actions: (
          <Fragment>
            <Link
              to={`/admin/test/${test._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteTestHandler(test._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteTestHandler = (id) => {
    dispatch(deleteTest(id));
  };

  return (
    <Fragment>
      <div className="row">
        {/* <div className="col-12 col-md-2">
          <Sidebar />
        </div> */}

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Tests</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setTests()}
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

export default TestsList;
