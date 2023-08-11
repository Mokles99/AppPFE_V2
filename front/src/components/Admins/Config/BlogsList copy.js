import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import {Alert} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/table";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form  from "react-bootstrap/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { addContactAction,editContactAction,listerContact,deleteContactAction } from "../../../actions/contact.actions"
import { useDispatch, useSelector } from "react-redux";

function ContactsList() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.blog.contacts.contactList);
    useEffect(() => { dispatch(listerContact());}, []);

    const [ id, setId] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail]=useState("");


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edit, setEdit] = useState(false);
    const handleCloseEdit = () => setEdit(false);


    const handleShowEdit = (id) => {
        contacts.forEach( c => {
          if (c._id == id) {
            setId(c._id)
            setName(c.name)
            setEmail(c.email)
            setMessage(c.message)
            console.log(c); }});
        console.log(id);
        setEdit(true);};


        const addContact = async () => {
            // console.log(title);
            // console.log(description);
            
        
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
          }


          const editContact = async () => {
            
            const data = {
              email,
              message,
              name,
            };
          await dispatch(editContactAction(id,data));
          await dispatch(listerContact());
          handleCloseEdit();
          setEmail("");
          setMessage("");
          setName("");
          setId("");
          }


          const deleteContact = async (id) => {
            //console.log(id)
            await dispatch(deleteContactAction(id));
            await dispatch(listerContact());
          };
 return(
            <div style={{paddingTop:'20vh'}}>
                sadasdasdads

      <div className="p-4">
        <Button variant="secondary" onClick={handleShow}>
          Ajout contact
        </Button>
        <h2> Contacts </h2>
        {contacts ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>

                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => handleShowEdit(contact._id)}
                    >
                      Modifier
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteContact(contact._id)}
                    >
                      Supprimer
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          "Aucun contact trouvé..."
        )}
      </div>
      {/* PUPUP ADD////////////////////////////////////////////////////////////////// */}
      <Modal style={{paddingTop:'12vh'}} show={show} onHide={handleClose}>
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

      {/* POPUP EDIT user //////////////////////////////////////////////////////*/}
      {/* <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Entrer le TITLE "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="entrer description "
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={editContact}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
            </div>
          )
}
export default ContactsList