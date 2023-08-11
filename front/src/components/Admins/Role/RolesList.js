import React, { Fragment, useEffect } from "react";
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import "../../Admindash2/Admindash2/Admindash2.css";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  getRoles,
  deleteRole,
} from "../../../actions/role.actions";
import { DELETE_ROLE_RESET } from "../../../actions/constantes";

import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx"

const RolesList = ({ history }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const { loading, error, roles } = useSelector(
    (state) => state.roles
  );
  const { isDeleted } = useSelector((state) => state.role);
  console.log({ roles });
  useEffect(() => {
    dispatch(getRoles());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Role deleted successfully");
      history.push("/admin/roles");
      dispatch({ type: DELETE_ROLE_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const deleteRoleHandler = (id) => {
    dispatch(deleteRole(id));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 250,
    },
   
    {
      field: "name",
      headerName: "Role",
      width: 200,
    },
  
  ];

  const rolesWithKeys = roles.map((role, index) => ({
    ...role,
    id: index + 1,
  }));
  return (
    <div className="admindash2">
      <Sidebar/>
      
      <Box sx={{ height: 400, paddingTop: "13vh", width: "100%"}}>
        {/* <Link to="/role/new"> 
      <Button variant="secondary"   >
          New Role
        </Button>
        </Link> */}
        <DataGridBox>
          <DataGrid
            rows={rolesWithKeys}
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
    </div>
  );
};

export default RolesList;
