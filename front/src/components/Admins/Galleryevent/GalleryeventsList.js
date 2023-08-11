
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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getGalleryevents,
  deleteGalleryevent,
} from "../../../actions/galleryevent.actions";
import { DELETE_GALLERYEVENT_RESET } from "../../../actions/constantes";


const GalleryeventsList = ({ history }) => {


  ///
  const [deletingId, setDeletingId] = React.useState(null);
  ///

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDeletingId(null);
  };



  const dispatch = useDispatch();

  const { loading, error, galleryevents } = useSelector(
    (state) => state.galleryevents
  );
  const { isDeleted } = useSelector((state) => state.galleryevent);
  console.log({ galleryevents });
  useEffect(() => {
    dispatch(getGalleryevents());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Galleryevent deleted successfully");
      history.push("/admin/galleryevents");
      dispatch({ type: DELETE_GALLERYEVENT_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const deleteGalleryeventHandler = (id) => {
    dispatch(deleteGalleryevent(id));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field:"actions",
      headerName:"Actions",
      width:150,
      
      renderCell:({row}) =>{
        return (
          <Fragment>
          <Link
            to={`/admin/galleryevent/${row._id}`}
            style={{color:"rgb(56,58,72)"}}  >
            {/* <i className="fa fa-pencil"></i> */}
           <EditIcon/>
          </Link>
          
          {/* <IconButton aria-label="delete"
            onClick={() => deleteGalleryeventHandler(row._id)}
          >
            <DeleteIcon/>
            </IconButton> */}

            {/* mok */}

            <IconButton aria-label="delete" onClick={() => {setDeletingId(row._id); handleClickOpen();}} >
  <DeleteIcon/>
</IconButton>
        </Fragment>
        )
      }

    }
  ];

  const galleryeventsWithKeys = galleryevents.map((galleryevent, index) => ({
    ...galleryevent,
    id: index + 1,
  }));
  return (
    <div className="admindash2">
      <Sidebar/>
      <Box sx={{ height: 400, paddingTop:"13vh", width: "80%" }}>
      <Link to="/galleryevent/new"> 
      <Button variant="secondary"   >
          New Galleryevent
        </Button>
        </Link>
        <DataGridBox>
        <DataGrid
          rows={galleryeventsWithKeys}
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
        <DialogTitle id="alert-dialog-title">
          {"Delete operation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button 
      onClick={() => deleteGalleryeventHandler(deletingId)}> Yes .. <TiTickOutline/>
    </Button>
          <Button onClick={handleClose} autoFocus>
           No .. <AiOutlineStop/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GalleryeventsList;
