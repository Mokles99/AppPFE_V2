import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import "../../styles/SideBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader/Loader";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { DataGridBox } from "./DataGrid.style";
import {styled} from "@mui/material/styles"
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from "react-bootstrap/Button";
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx"
// import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookings,
  deleteBooking,
} from "../../../actions/bookinghotel.actions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";
import { DELETE_BOOKING_RESET } from "../../../actions/constantes";
import { MenuItem, Select } from "@mui/material";

const BookingsList = ({ history }) => {
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

  const { loading, error, bookings } = useSelector(
    (state) => state.bookings
  );
  const { isDeleted } = useSelector((state) => state.booking);
  console.log({ bookings });
  useEffect(() => {
    dispatch(getAllBookings());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Booking deleted successfully");
      history.push("/admin/bookings");
      dispatch({ type: DELETE_BOOKING_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const deleteBookingHandler = (id) => {
    dispatch(deleteBooking(id));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Select
          value={params.row.status}
          onChange={(event) => {
            
            console.log('Nouveau status pour la réservation:', params.row._id, event.target.value);
          }}
        >
          <MenuItem value={'confirmed'}>Confirmé</MenuItem>
          <MenuItem value={'cancelled'}>Annulé</MenuItem>
        </Select>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "bookAt",
      headerName: "Date",
      width: 200,
    },
    {
      field: "fullName",
      headerName: "FullName",
      width: 200,
    },
    {
      field: "bookingTitle",
      headerName: "Booking",
      width: 80,
    },
    {
      field: "night",
      headerName: "Nights",
      width: 150,
    },
    {
      field: "chambretype",
      headerName: "Chambre",
      width: 150,
    },
    {
      field: "hebrgtype",
      headerName: "Hebergement",
      width: 150,
    },
    {
      field: "sizetype",
      headerName: "Persons",
      width: 150,
    },
    {
      field: "priceChambre",
      headerName: "Chambre",
      width: 150,
    },
    {
      field: "priceHebr",
      headerName: "Pack Hebr",
      width: 150,
    },
    {
      field: "priceSize",
      headerName: "Size",
      width: 150,
    },
    {
      field: "totalpay",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Fragment>

          

            {/* <IconButton
              aria-label="delete"
              // className="btn"
              onClick={() => deleteBookingHandler(row._id)}
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
           
          </Fragment>
        );
      },
    },
  ];

  const bookingsWithKeys = bookings.map((booking, index) => ({
    ...booking,
    id: index + 1,
  }));
  return (
    <div className="admindash2">
      <Sidebar/>
      <Box sx={{ height: 400, paddingTop:"13vh", width: "80%" }}>
     
        <DataGridBox>
        <DataGrid
          rows={bookingsWithKeys}
          columns={columns}
          slots={{toolbar:GridToolbar}}
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
          <Button onClick={() => deleteBookingHandler(deletingId)}>
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

export default BookingsList;
