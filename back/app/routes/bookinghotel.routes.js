const express = require ('express')

const { createBooking,getAllBookings, getSingleBooking, updateBooking, deleteBooking,countBookingsByHotel,countBookingsHotel,dailyHotelBookings } = require('../controllers/bookinghotel.controller');

const {authJwt} = require ('../middlewares')

const router = express.Router();
router.post("/",authJwt.verifyToken,createBooking ) 
router.get("/singlebook/:id", getSingleBooking);


router.put("/updatebook/:id", updateBooking);


router.delete("/:id", deleteBooking);


router.get("/getallbooking",getAllBookings)

router.get('/countbookingsby',countBookingsByHotel);
router.get('/countbookings',countBookingsHotel);
router.get('/dailyhotel',dailyHotelBookings);



module.exports = router ;


// router.get("/:id",authJwt.verifyToken,getBooking)