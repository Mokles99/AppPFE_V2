import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import "../../styles/SideBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader/Loader"
// import Sidebar from "./Sidebar";
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx"
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { DataGridBox } from "./DataGrid.style";
import {styled} from "@mui/material/styles"
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getBloghomes, deleteBloghome } from '../../../actions/bloghome.actions'
import { DELETE_BLOGHOME_RESET } from '../../../actions/constantes'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";

  const BloghomesList = ({ history }) => {

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
  
  const { loading, error, bloghomes } = useSelector((state) => state.bloghomes);
  const { isDeleted } = useSelector((state) => state.bloghome);

  useEffect(() => {
    dispatch(getBloghomes());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Bloghome deleted successfully");
      history.push("/admin/bloghomes");
      dispatch({ type: DELETE_BLOGHOME_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);


  const deleteBloghomeHandler = (id) => {
    dispatch(deleteBloghome(id));
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
      field:"actions",
      headerName:"Actions",
      width:200,
      renderCell:({row}) =>{
        return (
          <Fragment>
          <Link
            to={`/admin/bloghome/${row._id}`}
            style={{color:"rgb(56,58,72)"}}
            >
            {/* <i className="fa fa-pencil"></i> */}
           <EditIcon/>
          </Link>
          
          {/* <IconButton aria-label="delete"

          
            onClick={() => deleteBloghomeHandler(row._id)}
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
        </Fragment>
        )
      }

    }
  ];

  const bloghomesWithKeys = bloghomes.map((bloghome, index) => ({
    ...bloghome,
    id: index + 1,
  }));
  return (
    <div className="admindash2">
      <Sidebar/>
      <Box sx={{ height: 400, paddingTop:"13vh", width: "100%" }}>
      <Link to="/bloghome/new"> 
      <Button variant="secondary"   >
          New Blog
        </Button>
        </Link>
        <DataGridBox>
        <DataGrid
          rows={bloghomesWithKeys}
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
          <Button onClick={() => deleteBloghomeHandler(deletingId)}>
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

export default BloghomesList;
