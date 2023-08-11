const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

///
const path=require('path')
const Stripe = require('stripe')(process.env.SECRET_KEY)


const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary')

require('dotenv').config();



//
const contactRoute = require("./app/routes/contact.routes")
const aviseventRoute = require("./app/routes/avisevent.routes")
const formulairedestRoute = require("./app/routes/formulairedest.routes")
const formulaireeventRoute = require("./app/routes/formulaireevent.routes")





const hotelRoute = require("./app/routes/hotel.routes")
const reviewhotelRoute = require ("./app/routes/reviewhotel.routes")
const bookinghotelRoute = require ("./app/routes/bookinghotel.routes")

//

///

const testRoute = require("./app/routes/test.routes")
const destinationRoute = require("./app/routes/destination.routes")
const offreRoute = require("./app/routes/offre.routes")
const eventRoute = require("./app/routes/event.routes")
const galleryeventRoute = require("./app/routes/galleryevent.routes")
const bloghomeRoute = require("./app/routes/bloghome.routes")
const statRoute = require("./app/routes/stat.routes")
const statoneRoute = require("./app/routes/statone.routes")


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

//for large entity
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

db.mongoose
  .connect(`mongodb://localhost:27017/newBase`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/role.routes")(app);
app.use("/contact",contactRoute)
app.use("/avisevent",aviseventRoute)
app.use("/formulairedest",formulairedestRoute)
app.use("/formulaireevent",formulaireeventRoute)

app.use("/hotel",hotelRoute)
//

//
app.use("/review",reviewhotelRoute)
app.use("/booking",bookinghotelRoute)
////
app.use('/payment',async (req,res)=>{
  let status,error;
  const{token,amount}=req.body;
  console.log(token)
  try{
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency:"TND"
    })
    status = "success"

  }catch(error){
console.log(error);
status = "failure"
  }

  res.json({error,status})
})

/////
app.use("/test",testRoute)
app.use("/destination",destinationRoute)
app.use("/offre",offreRoute)
app.use("/event",eventRoute)
app.use("/galleryevent",galleryeventRoute)
app.use("/bloghome",bloghomeRoute)
app.use("/stat",statRoute)
app.use("/statone",statoneRoute)






// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//function for roles
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
