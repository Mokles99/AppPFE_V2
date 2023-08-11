import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import auth from "./reducers/auth";


import blogReducer from "./reducers/contact.reducer";
import aviseventReducer from "./reducers/avisevent.reducer";
import formulairedestReducer from "./reducers/formulairedest.reducer";
import message from "./reducers/message";

import { testsReducer,newTestReducer,testReducer,testDetailsReducer } from './reducers/test.reducer'
import { destinationsReducer,newDestinationReducer,destinationReducer,destinationDetailsReducer } from './reducers/destination.reducer'
import {bloghomesReducer,newBloghomeReducer,bloghomeReducer,bloghomeDetailsReducer} from './reducers/bloghome.reducer'
import { eventDetailsReducer, eventReducer, eventsReducer, newEventReducer } from "./reducers/event.reducer";
import { newOffreReducer,offreReducer,offreDetailsReducer,offresReducer} from "./reducers/offre.reducer"
import { newGalleryeventReducer,galleryeventDetailsReducer,galleryeventReducer,galleryeventsReducer} from "./reducers/galleryevent.reducer"
import { newHotelReducer,hotelDetailsReducer,hotelReducer,hotelsReducer,searchHotelsReducer} from "./reducers/hotel.reducer"
import {newUserReducer,userDetailsReducer,userReducer,usersReducer} from "./reducers/user.reducer"
import {newRoleReducer,roleDetailsReducer,roleReducer,rolesReducer} from "./reducers/role.reducer"
import formulaireeventReducer from "./reducers/formulaireevent.reducer";
import { bookingReducer ,bookingsReducer,bookingDetailsReducer} from "./reducers/bookinghotel.reducer";

const middleware = [thunk];


const reducer = combineReducers({
  
   tests: testsReducer,
    testDetails :testDetailsReducer,
    newTest :newTestReducer,
    test: testReducer,

    destinations: destinationsReducer,
    destinationDetails :destinationDetailsReducer,
    newDestination :newDestinationReducer,
    destination: destinationReducer,

    bloghomes: bloghomesReducer,
    bloghomeDetails :bloghomeDetailsReducer,
    newBloghome :newBloghomeReducer,
    bloghome: bloghomeReducer,

    events: eventsReducer,
    eventDetails :eventDetailsReducer,
    newEvent :newEventReducer,
    event: eventReducer,

    offres: offresReducer,
    offreDetails :offreDetailsReducer,
    newOffre :newOffreReducer,
    offre: offreReducer,

    galleryevents: galleryeventsReducer,
    galleryeventDetails :galleryeventDetailsReducer,
    newGalleryevent :newGalleryeventReducer,
    galleryevent: galleryeventReducer,


    hotels: hotelsReducer,
    hotelDetails :hotelDetailsReducer,
    newHotel :newHotelReducer,
    hotel: hotelReducer,
    searchhotel:searchHotelsReducer,


    bookings:bookingsReducer,
    booking:bookingReducer,
    bookingDetails:bookingDetailsReducer,

    users: usersReducer,
    userDetails :userDetailsReducer,
    newUser :newUserReducer,
    user: userReducer,

    roles: rolesReducer,
    roleDetails :roleDetailsReducer,
    newRole :newRoleReducer,
    role: roleReducer,

    auth:auth,
    message:message,




    blog:blogReducer,
    avisevent:aviseventReducer,
    formulairedest:formulairedestReducer,  
    formulaireevent:formulaireeventReducer,


    
    
    
})
const store = createStore(
  reducer,
  // rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
