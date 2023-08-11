import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/table";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  addContactAction,
  editContactAction,
  listerContact,
  deleteContactAction,
} from "../../../actions/contact.actions";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { DataGridBox } from "../Destination/DataGrid.style"; 
import {styled} from "@mui/material/styles"
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar.jsx"
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineStop } from "react-icons/ai";
function ContactsList() {
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
  const contacts = useSelector((state) => state.blog.contacts.contactList);
  useEffect(() => {
    dispatch(listerContact());
  }, []);


  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);

  const handleShowEdit = (id) => {
    contacts.forEach((c) => {
      if (c._id == id) {
        setId(c._id);
        setName(c.name);
        setEmail(c.email);
        setMessage(c.message);
        console.log(c);
      }
    });
    console.log(id);
    setEdit(true);
  };

  const addContact = async () => {
    const data = {
      name,
      email,
      message,
    };
    await dispatch(addContactAction(data));
    await dispatch(listerContact());
    handleClose();
    setEmail("");
    setMessage("");
    setName("");
  };
///
  const editContact = async () => {
    const data = {
      email,
      message,
      name,
    };
    await dispatch(editContactAction(id, data));
    await dispatch(listerContact());
    handleCloseEdit();
    setEmail("");
    setMessage("");
    setName("");
    setId("");
  };
////
  const deleteContact = async (id) => {
    //console.log(id)
    await dispatch(deleteContactAction(id));
    await dispatch(listerContact());
  };
  ///

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },

    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "message",
      headerName: "Message",
      width: 200,
    },
    {
      field:"actions",
      headerName:"Actions",
      width:200,
      renderCell:({row}) =>{
        return (
          <>
          <Link
            to={`/admin/contact/${row._id}`}
            style={{color:"rgb(56,58,72)"}}>
            {/* <i className="fa fa-pencil"></i> */}
           <EditIcon/>
          </Link>    
          {/* <IconButton aria-label="delete"
           
            onClick={() => deleteContact(row._id)}>
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
        </>
        )
      }

    }
  ];

  const contactsWithKeys = contacts?.map((contact, index) => ({
    ...contact,
    id: index + 1,
  }));

  return (

    <div className="admindash2">
      <Sidebar/>
    <div style={{ paddingTop: "20vh" }}>
      <div className="p-4">
        {/* <Button variant="secondary" onClick={handleShow}>
          Ajouter contact
        </Button> */}
        {contacts ? (
       <Box sx={{ height: 400, width: "100%" }}>
       <DataGridBox>
       <DataGrid
         rows={contactsWithKeys}
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
        ) : (
          "Aucun contact trouvé..."
        )}
      </div>
      {/* PUPUP ADD////////////////////////////////////////////////////////////////// */}
      <Modal style={{ paddingTop: "12vh" }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Entrer le title "
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Entrer le title "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="entrer description "
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addContact}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}
export default ContactsList;
