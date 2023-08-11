import axios from 'axios';

import {
     ALL_DESTINATIONS_REQUEST,
     ALL_DESTINATIONS_SUCCESS,
     ALL_DESTINATIONS_FAIL,
    
   NEW_DESTINATION_REQUEST,
    NEW_DESTINATION_SUCCESS,
   NEW_DESTINATION_FAIL,

     DELETE_DESTINATION_REQUEST,
    DELETE_DESTINATION_SUCCESS,
     DELETE_DESTINATION_FAIL,

     UPDATE_DESTINATION_REQUEST,
   UPDATE_DESTINATION_SUCCESS,
   UPDATE_DESTINATION_FAIL,

   DESTINATION_DETAILS_REQUEST,
     DESTINATION_DETAILS_SUCCESS,
   DESTINATION_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from './constantes'
export const newDestination = (destinationData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_DESTINATION_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/destination/destination/new`, destinationData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_DESTINATION_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_DESTINATION_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("destination create")
 }
export const deleteDestination = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_DESTINATION_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/destination/destination/${id}`)

         dispatch({
             type: DELETE_DESTINATION_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_DESTINATION_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateDestination = (id, destinationData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_DESTINATION_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/destination/destination/${id}`, destinationData, config)

         dispatch({
             type: UPDATE_DESTINATION_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_DESTINATION_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getDestinationDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: DESTINATION_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/destination/destination/${id}`)

         dispatch({
             type: DESTINATION_DETAILS_SUCCESS,
             payload: data.destination
         })

     } catch (error) {
         dispatch({
             type: DESTINATION_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getDestinations = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_DESTINATIONS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/destination/destinations`)

         dispatch({
             type: ALL_DESTINATIONS_SUCCESS,
             payload: data.destinations
         })

     } catch (error) {

         dispatch({
             type: ALL_DESTINATIONS_FAIL,
             payload: error.response.data.message
         })
     }
 }