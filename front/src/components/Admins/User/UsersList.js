import React, { Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../actions/user.actions";
import { DELETE_USER_RESET } from "../../../actions/constantes";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx";
import { Avatar } from "@mui/material";

const UsersList = ({ history }) => {
  const [deletingId, setDeletingId] = React.useState(null);
  ///
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  

  const dispatch = useDispatch();

  const { loading, error, users } = useSelector((state) => state.users);
  const { isDeleted } = useSelector((state) => state.user);
  console.log({ users });
  useEffect(() => {
    dispatch(getUsers());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("User deleted successfully");
      navigate("/admin/users");
      history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "roles",
      headerName: "Roles",
      width: 200, 
    },
    {
      field: "username",
      headerName: "Username",
      width: 200,
    },
    // {
    //   field: "username",
    //   headerName: "Username",
    //   width: 200,
    //   renderCell: (params) => (
    //     <div>
    //       <Avatar alt={params.value} src="https://github.com/shadcn.png" /> 
    //       {params.value}
    //     </div>
    //   ),
    // },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Fragment>
            <Link
              to={`/admin/users/${row._id}`}
              style={{ color: "rgb(56,58,72)" }}
            >
              <EditIcon />
            </Link>

            {/* <IconButton
              aria-label="delete"
              // className="btn"
              onClick={() => deleteUserHandler(row._id)}
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

  const usersWithKeys = users.map((user, index) => ({
    ...user,
    id: index + 1,
    roles: user.roles.map(role => role.name).join(', '),
  }));
  return (
    <div className="admindash2">
      <Sidebar />

      <Box sx={{ height: 400, paddingTop: "13vh", width: "80%" }}>
        <Link to="/user/new">
          <Button variant="secondary">New User</Button>
          <Avatar alt="Remy Sharp" src="https://github.com/shadcn.png" />
        </Link>
        <DataGridBox>
          <DataGrid
            rows={usersWithKeys}
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
          <Button onClick={() => deleteUserHandler(deletingId)}>
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

export default UsersList;
