// import React, { useState , useRef} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContentText,
//   DialogContent,
//   Button,
//   DialogActions,
//   TextField,
//   Box,
// } from "@mui/material";
// import { addEventAction } from "../../../actions/formulaireevent.actions";
// import QRCode from "react-qr-code";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import logo from "../../../Assets/logoocc.png";
// const Modalevent = ({ open, handleClose, title, price, eventId }) => {
//   const dispatch = useDispatch();

//   const modalRef = useRef();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [isDisabled, setIsDisabled] = useState(false);

//   const addEvent = async () => {
//     const data = {
//       name,
//       email,
//       number,
//       title,
//       price,
//       eventId,
//     };
//     await dispatch(addEventAction(data));
//     setIsDisabled(true);
//   };
//   const generateQR = () => {
//     return name + " " + email + number + title + price;
//   };

//   const exportToPDF = () => {
//     html2canvas(modalRef.current).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save("modal.pdf");
//     });
//   };
//   return (
//     <Dialog  open={open} onClose={handleClose} style={{paddingTop:'10vh'}}>
//   <div ref={modalRef} style={{
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   }}>
//     <a
//       href="#"
//       className="logo flex"
//       style={{
//         fontWeight: 600,
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src={logo}
//         alt=""
//         style={{
//           width: "5rem",
//           height: "40%",
//         }}
//       />
//     </a>
//     <DialogContentText>Reserve and have fun</DialogContentText>
//     <DialogTitle> Event:{title}</DialogTitle>
//     <DialogTitle>{price}TND </DialogTitle>
//     <DialogContent>
      
//       <TextField
//         autoFocus
//         margin="dense"
//         label="Email Address"
//         type="email"
//         sx={{ width: "100%" }}
//         variant="outlined"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         disabled={isDisabled}
//       />
//       <TextField
//         autoFocus
//         margin="dense"
//         label="Name"
//         type="text"
//         sx={{ width: "100%" }}
//         variant="outlined"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         disabled={isDisabled}
//       />
//       <TextField
//         autoFocus
//         margin="dense"
//         sx={{ width: "100%"}}
//         label="Number"
//         type="text"
//         disabled={isDisabled}
//         variant="outlined"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <Box
//         display="flex"
//         justifyContent="center"
//         marginTop="10px"
//         height="100px"
//         width="100px"
//         alignItems="center"
//         marginLeft="230px"
//       >
//         <QRCode value={generateQR()} />
//       </Box>
//     </DialogContent>
//     <DialogActions>
//       {isDisabled ? (
//         <Button fullWidth alignItems="center" onClick={exportToPDF} >
//           Export as PDF
//         </Button>
//       ) : (
//         <Button
//           onClick={(handleClose, addEvent)}
//           fullWidth
//           alignItems="center"
//         >
//           Get Pass
//         </Button>
//       )}
//     </DialogActions>
//   </div>
// </Dialog>

//   );
// };

// export default Modalevent;



import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Button,
  DialogActions,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addEventAction } from "../../../actions/formulaireevent.actions";
import QRCode from "react-qr-code";
import { PDFDownloadLink, Document, Page, Text, Image, StyleSheet, View } from '@react-pdf/renderer';
import logo from "../../../Assets/logoocc.png";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    marginBottom: 20,
  },
  qrCode: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

const MyDocument = ({ name, email, number, title, price, eventId }) => (
  <Document>
    <Page style={styles.page}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Event: {title}</Text>
      <Text style={styles.content}>Price: {price} TND</Text>
      <Text style={styles.content}>Name: {name}</Text>
      <Text style={styles.content}>Email: {email}</Text>
      <Text style={styles.content}>Number: {number}</Text>
      <Image source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${name}${email}${number}${title}${price}` }} style={styles.qrCode} />
    </Page>
  </Document>
);

const Modalevent = ({ open, handleClose, title, price, eventId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const addEvent = async () => {
    const data = {
      name,
      email,
      number,
      title,
      price,
      eventId,
    };
    await dispatch(addEventAction(data));
    setIsDisabled(true);
  };

  return (
    <Dialog open={open} onClose={handleClose} style={{ paddingTop: "10vh" }}>
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
      <DialogTitle style={{textAlign: "center"}}> Event: {title}</DialogTitle>
      <DialogTitle style={{textAlign: "center"}}>{price} TND </DialogTitle>
      <DialogContent>
        <DialogContentText>Reserve and have fun</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
        />
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isDisabled}
        />
        <TextField
          margin="dense"
          label="Number"
          type="text"
          fullWidth
          variant="outlined"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          disabled={isDisabled}
        />
        <Box display="flex" justifyContent="center" marginLeft="230px" marginTop="10px" height="100px" width="100px" alignItems="center">
          <QRCode value={`${name}${email}${number}${title}${price}`} />
        </Box>
      </DialogContent>
      <DialogActions>
     
        {isDisabled ? (
          <PDFDownloadLink document={<MyDocument name={name} email={email} number={number} title={title} price={price} eventId={eventId} />} fileName="modal.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        ) : (
          <Button onClick={addEvent} fullWidth>
            Get Pass
          </Button>
        )}
       
      </DialogActions>
    </Dialog>
  );
};

export default Modalevent;
