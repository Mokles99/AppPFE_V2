import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import "../../styles/SideBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader/Loader";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataGridBox } from "./DataGrid.style";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../Admindash2/Admindash2/Admindash2.css";
import Button from "react-bootstrap/Button";
// import Sidebar from "./Sidebar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  getDestinations,
  deleteDestination,
} from "../../../actions/destination.actions";
import { DELETE_DESTINATION_RESET } from "../../../actions/constantes";
// import Sidebar from "../../Admindash2/SideBar Section/Sidebar";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx";

const DestinationsList = ({ history }) => {
  ///
  const [deletingId, setDeletingId] = React.useState(null);
  ///
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const { loading, error, destinations } = useSelector(
    (state) => state.destinations
  );
  const { isDeleted } = useSelector((state) => state.destination);
  console.log({ destinations });
  useEffect(() => {
    dispatch(getDestinations());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Destination deleted successfully");
      history.push("/admin/destinations");
      dispatch({ type: DELETE_DESTINATION_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const deleteDestinationHandler = (id) => {
    dispatch(deleteDestination(id));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 80,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Fragment>
            <Link
              to={`/admin/destination/${row._id}`}
              style={{ color: "rgb(56,58,72)" }}
            >
              <EditIcon />
            </Link>

            {/* <IconButton
              aria-label="delete"
              // className="btn"
              onClick={() => deleteDestinationHandler(row._id)}
            >
              <DeleteIcon />
            </IconButton> */}
            <IconButton
              aria-label="delete"
              onClick={() => {
                setDeletingId(row._id);
                handleClickOpen();
              }}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton>
              <VisibilityIcon />
            </IconButton>
          </Fragment>
        );
      },
    },
  ];

  const destinationsWithKeys = destinations.map((destination, index) => ({
    ...destination,
    id: index + 1,
  }));
  return (
    <div className="admindash2">
      <Sidebar />

      <Box sx={{ height: 400, paddingTop: "13vh", width: "80%" }}>
        <Link to="/destination/new">
          <Button variant="secondary">New Destination</Button>
        </Link>
        <DataGridBox>
          <DataGrid
            rows={destinationsWithKeys}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </DataGridBox>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete operation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteDestinationHandler(deletingId)}>
            {" "}
            Yes .. <TiTickOutline />
          </Button>
          <Button onClick={handleClose} autoFocus>
            No .. <AiOutlineStop />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DestinationsList;
