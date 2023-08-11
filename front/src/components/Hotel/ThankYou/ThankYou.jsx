import React from "react";
import "./thankYou.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const ThankYou = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:8080/payment",
        method: "post",
        data: {
          amount: "200",
          token,
        },
      });
      if (response.status == 200) {
        console.log("your payement was successful");
      }
    } catch (error) {}
  };

  return (
    <>
      <section>
        {/* <Container> */}
        <Col lg="12" className="pt-5 text-center">
          <div className="thank__you">
            <span>
              <i class="ri-checkbox0circle-line"></i>
            </span>
            <h1 className="mb-3 fw-semibold">Thank You</h1>
            <h3 className="mb-4">your desire is booked..</h3>
            <Button className="btn primary__btn w-25">
              <Link to="/Hotel">
                {" "}
                Back to Home <AiFillHome />
              </Link>
            </Button>

            {/* <Button className="btn primary__btn w-25">
              <Link to="/Hotel">
                {" "}
                Paiement en ligne <FaMoneyCheckAlt />{" "}
              </Link>
            </Button> */}
            <StripeCheckout
              stripeKey="pk_test_51NBIdHISN2tuqTd1LEDyURKT2UIJPF8GuBETlPdhVRBp0hV2tN9IqRXxaJIHvl3FgsbxiOAZJBiawTumgSD6uPM400suwAVvTB"
              label="Pay Now"
              name="Pay With Credit Card"
              billingAddress
              // shippingAddress
              amount={"1000"}
              description={"Your total is 700TND"}
              token={payNow}
            />
            <Button className="btn primary__btn w-25" onClick={handleOpen}>
              Passe à l'agence <ImLocation2 />{" "}
            </Button>
          </div>
        </Col>
        {/* </Container> */}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Oceana Travel Services™
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Soyez les bienvenus chez notre local <br></br>
              <ImLocation2 />
              Avenue Commandant Bejaoui Immeuble Bouhaha 3éme Etage<br></br>¶
              Frais dossier 23dt
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ThankYou;
