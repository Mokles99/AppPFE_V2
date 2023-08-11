import axios from "axios";

import {
  ALL_BOOKINGS_REQUEST,
  ALL_BOOKINGS_SUCCESS,
  ALL_BOOKINGS_FAIL,
  DELETE_BOOKING_FAIL,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_REQUEST,

 UPDATE_BOOKING_REQUEST, 
 UPDATE_BOOKING_SUCCESS,
 UPDATE_BOOKING_FAIL ,

 BOOKING_DETAILS_REQUEST, 
 BOOKING_DETAILS_SUCCESS ,
 BOOKING_DETAILS_FAIL 

} from './constantes'

export const createBooking = (data,token) => async (dispatch) => {
  try {
    console.log(data);
    console.log(dispatch);
    console.log(token);
    const response = await axios.post("http://localhost:8080/booking/", {
        ...data,
      }, {
        headers: {
          'x-access-token': token 
        }
      });
    console.log(response.data); 

    return response.data;
  } catch (error) {
    console.log(error);
  
    throw error; 
  }
};


export const getAllBookings = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BOOKINGS_REQUEST })


const {data} = await axios.get('http://localhost:8080/booking/getallbooking')

    
    

    dispatch({
      type: ALL_BOOKINGS_SUCCESS,
      payload: data.bookings
    })
  } catch (error) {
    dispatch({
      type: ALL_BOOKINGS_FAIL,
      payload: error.message
    })
  }
}
export const getSingleBooking = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_DETAILS_REQUEST })

    const { data } = await axios.get(`http://localhost:8080/booking/singlebook/${id}`)

    dispatch({
      type: BOOKING_DETAILS_SUCCESS,
      payload: data.booking
    })

  } catch (error) {
    dispatch({
      type: BOOKING_DETAILS_FAIL,
      payload: error.response.data.message
    })
  }
}

// Update booking
export const updateBooking = (id, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BOOKING_REQUEST })

    const { data } = await axios.put(`http://localhost:8080/booking/updatebook/${id}`, updatedData)

    dispatch({
      type: UPDATE_BOOKING_SUCCESS,
      payload: data.success
    })

  } catch (error) {
    dispatch({
      type: UPDATE_BOOKING_FAIL,
      payload: error.response.data.message
    })
  }
}

// Delete booking
export const deleteBooking = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BOOKING_REQUEST })

    const { data } = await axios.delete(`http://localhost:8080/booking/${id}`)

    dispatch({
      type: DELETE_BOOKING_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: DELETE_BOOKING_FAIL,
      payload: error.message
    })
  }
}