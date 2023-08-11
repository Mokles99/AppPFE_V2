import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Button,
  DialogActions,
  TextField,
  Box,
} from "@mui/material";
import { addDestAction } from "../../../actions/formulairedest.actions";
import logo from "../../../Assets/logoocc.png";


const Modaldest = ({ open, handleClose, destinationTitle }) => {
  const dispatch = useDispatch();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const addDest = async () => {
    const data = {
      name,
      email,
      number,
      message,
      title: destinationTitle,
      
    };
    // await dispatch(addDestAction(data));
    // handleClose();
    // alert("La réservation a été effectuée avec succès!");
    // setName("");
    // setEmail("");
    // setNumber("");
    // setMessage("");
    dispatch(addDestAction(data)).then(() => {
      
      handleClose();
  
      
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
  
      
      alert("La réservation a été effectuée avec succès!");  
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {/* <DialogTitle>{title}</DialogTitle>
      <DialogTitle>{price}</DialogTitle> */}
      <DialogContent>
        <DialogContentText >
          Oceana Travel : Where Paradise Becomes the Destination
        </DialogContentText>
        <a
          href="#"
          className="logo flex"
          style={{
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              width: "5rem",
              height: "40%",
            }}
          />
        </a>
        <h3>Destination: {destinationTitle}</h3>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          sx={{ width: "100%" }}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          sx={{ width: "100%" }}
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          sx={{ width: "100%" }}
          label="Number"
          type="text"
          variant="outlined"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          sx={{ width: "100%" }}
          label="Message"
          type="text"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <Box
          display="flex"
          justifyContent="center"
          marginTop="10px"
          height="100px"
          width="100px"
          alignItems="center"
          marginLeft="140px"
        ></Box> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={(handleClose, addDest)} fullWidth alignItems="center">
          Reserve ™
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modaldest;
