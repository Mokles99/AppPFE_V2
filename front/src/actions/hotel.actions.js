import axios from 'axios';

import {
     ALL_HOTELS_REQUEST,
     ALL_HOTELS_SUCCESS,
     ALL_HOTELS_FAIL,
    
   NEW_HOTEL_REQUEST,
    NEW_HOTEL_SUCCESS,
   NEW_HOTEL_FAIL,

     DELETE_HOTEL_REQUEST,
    DELETE_HOTEL_SUCCESS,
     DELETE_HOTEL_FAIL,

     UPDATE_HOTEL_REQUEST,
   UPDATE_HOTEL_SUCCESS,
   UPDATE_HOTEL_FAIL,

   HOTEL_DETAILS_REQUEST,
     HOTEL_DETAILS_SUCCESS,
   HOTEL_DETAILS_FAIL,

    SEARCH_HOTELS_START ,
 SEARCH_HOTELS_SUCCESS ,
 SEARCH_HOTELS_FAILURE ,
   
    CLEAR_ERRORS

 } from './constantes'
export const newHotel = (hotelData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_HOTEL_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/hotel/hotel/new`, hotelData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_HOTEL_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_HOTEL_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("hotel create")
 }
export const deleteHotel = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_HOTEL_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/hotel/hotel/${id}`)

         dispatch({
             type: DELETE_HOTEL_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_HOTEL_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateHotel = (id, hotelData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_HOTEL_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/hotel/hotel/${id}`, hotelData, config)

         dispatch({
             type: UPDATE_HOTEL_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_HOTEL_FAIL,
             payload: error.response.data.message
         })
     } }

 export const getHotelDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: HOTEL_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/hotel/hotel/${id}`)

         dispatch({
             type: HOTEL_DETAILS_SUCCESS,
             payload: data.hotel
         })

     } catch (error) {
         dispatch({
             type: HOTEL_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getHotels = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_HOTELS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/hotel/hotels`)

         dispatch({
             type: ALL_HOTELS_SUCCESS,
             payload: data.hotels
         })
         return data 

     } catch (error) {

         dispatch({
             type: ALL_HOTELS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 /////




export const searchHotels = (title, city) => async dispatch => {
    dispatch({ type: SEARCH_HOTELS_START });

    try {
        const response = await axios.get('http://localhost:8080/hotel/search', {
            params: {
                title: title,
                city: city
            }
        });

        dispatch({ type: SEARCH_HOTELS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SEARCH_HOTELS_FAILURE, payload: error.message });
    }
};


 