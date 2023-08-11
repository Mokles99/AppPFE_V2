import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import "../../styles/SideBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader/Loader"
// import Sidebar from "./Sidebar";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { DataGridBox } from "./DataGrid.style";
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvent } from '../../../actions/event.actions'
import { DELETE_EVENT_RESET } from '../../../actions/constantes'
import Button from "react-bootstrap/Button";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";
  const EventsList = ({ history }) => {
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

  const deleteEventHandler = (id) => {
    dispatch(deleteEvent(id));
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
      width: 200,
    },
    {
      field: "places",
      headerName: "Tickets",
      width: 150,
    },

    
    {
      field:"actions",
      headerName:"Actions",
      width:200,
      renderCell:({row}) =>{
        return (
          <Fragment>
          <Link
            to={`/admin/event/${row._id}`}
            style={{color:"rgb(56,58,72)"}}
            
             >
            {/* <i className="fa fa-pencil"></i> */}
           <EditIcon/>
          </Link>
          
          {/* <IconButton aria-label="delete"

            // className="btn"
            onClick={() => deleteEventHandler(row._id)}
          >
            <DeleteIcon/>
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
            <VisibilityIcon/>
            </IconButton>
        </Fragment>
        )
      }

    }
  ];

  const eventsWithKeys = events.map((event, index) => ({
    ...event,
    id: index + 1,
  }));
  

  return (
    <Fragment>
      {/* <div className="row"> */}
        {/* <div className="col-12 col-md-2">
          <Sidebar />
        </div> */}
{/* 
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
        </div> */}
      {/* </div> */}
      <div className="admindash2">
      <Sidebar/>
      <Box sx={{ height: 400, paddingTop:"13vh", width: "100%" }}>
      <Link to="/event/new"> 
      <Button variant="secondary"   >
          New Event
        </Button>
        </Link>
        <DataGridBox>
        <DataGrid
          rows={eventsWithKeys}
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
          <Button onClick={() => deleteEventHandler(deletingId)}>
            {" "}
            Yes .. <TiTickOutline />
          </Button>
          <Button onClick={handleClose} autoFocus>
            No .. <AiOutlineStop />
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </Fragment>
  );
};

export default EventsList;
