import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

import blogReducer from './contact.reducer'
import { testReducer } from "./test.reducer";
import { destinationReducer } from "./destination.reducer";
import { bloghomeReducer } from "./bloghome.reducer";
import { eventReducer } from "./event.reducer";
import  { offreReducer } from './offre.reducer'
import { galleryeventReducer } from "./galleryevent.reducer";
import { hotelReducer } from "./hotel.reducer";
import {userReducer} from  "./user.reducer"
import {bookingReducer} from "./bookinghotel.reducer"


export default combineReducers({
  auth,
  message,
  
  // blog : blogReducer,

  
  test: testReducer,
  destination: destinationReducer,
  bloghome:bloghomeReducer,
  event:eventReducer,
  offre:offreReducer,
  galleryevent:galleryeventReducer,
  hotel:hotelReducer,
  user:userReducer,
  bookings:bookingReducer,


});
