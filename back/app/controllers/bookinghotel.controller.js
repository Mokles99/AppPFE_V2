const BookingHotelModel = require ("../models/bookinghotel.model")

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");

exports.createBooking = async (req, res) => {
  const newBooking = new BookingHotelModel(req.body);
  try {
    const savedBooking = await newBooking.save();
    res
      .status(200)
      .json({
        message: "your hotel is booked ",
        data: savedBooking,
      });
  } catch (error) {
    res
    .status(500)
    .json({
      message: "internal server error"
    });
  }
};

// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await BookingHotelModel.find();
//     res.status(200).json({
//       message: "All bookings retrieved successfully",
//       bookings,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

exports.getAllBookings = catchAsyncErrors(async (req, res, next) => {
  const bookings = await BookingHotelModel.find();

  res.status(200).json({
    success: true,
    bookings,
  });
});



exports.getSingleBooking = async (req, res) => {
  try {
    const singleBooking = await BookingHotelModel.findById(req.params.id);
    if (!singleBooking) {
      return res.status(404).json({ message: "No booking found" });
    }
    res.status(200).json({ data: singleBooking });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.updateBooking = async (req, res) => {
  try {
    const updatedBooking = await BookingHotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: "No booking found" });
    }
    res.status(200).json({ data: updatedBooking });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await BookingHotelModel.findByIdAndRemove(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "No booking found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.countBookingsByHotel = async (req, res, next) => {
  try {
    const bookings = await BookingHotelModel.find({});
    let hotelCounts = {};
    for(let i = 0; i < bookings.length; i++) {
        let hotelTitle = bookings[i].hotelTitle;
        if(hotelCounts[hotelTitle]) {
            hotelCounts[hotelTitle]++;
        } else {
            hotelCounts[hotelTitle] = 1;
        }
    }

    let maxCount = 0;
    let mostBookedHotel = '';
    for(let hotel in hotelCounts) {
        if(hotelCounts[hotel] > maxCount) {
            maxCount = hotelCounts[hotel];
            mostBookedHotel = hotel;
        }
    }

    res.json({mostBookedHotel, maxCount});
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des réservations.' });
  }
};
exports.countBookingsHotel = async (req, res, next) => {
  try {
    const bookings = await BookingHotelModel.find({});
    let hotelCounts = {};
    for(let i = 0; i < bookings.length; i++) {
        let hotelTitle = bookings[i].hotelTitle;
        if(hotelCounts[hotelTitle]) {
            hotelCounts[hotelTitle]++;
        } else {
            hotelCounts[hotelTitle] = 1;
        }
    }
    res.json(hotelCounts);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des réservations.' });
  }
};

exports.dailyHotelBookings = async (req, res) => {
  try {
    const bookings = await BookingHotelModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const result = bookings.map((b) => ({ x: b._id, y: b.count }));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des réservations.' });
  }
};
