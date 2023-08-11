import axios from 'axios';

import {
     ALL_EVENTS_REQUEST,
     ALL_EVENTS_SUCCESS,
     ALL_EVENTS_FAIL,
    
   NEW_EVENT_REQUEST,
    NEW_EVENT_SUCCESS,
   NEW_EVENT_FAIL,

     DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
     DELETE_EVENT_FAIL,

     UPDATE_EVENT_REQUEST,
   UPDATE_EVENT_SUCCESS,
   UPDATE_EVENT_FAIL,

   EVENT_DETAILS_REQUEST,
     EVENT_DETAILS_SUCCESS,
   EVENT_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from './constantes'
export const newEvent = (eventData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_EVENT_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/event/event/new`, eventData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_EVENT_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_EVENT_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("event create")
 }
export const deleteEvent = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_EVENT_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/event/event/${id}`)

         dispatch({
             type: DELETE_EVENT_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_EVENT_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateEvent = (id, eventData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_EVENT_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/event/event/${id}`, eventData, config)

         dispatch({
             type: UPDATE_EVENT_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_EVENT_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getEventDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: EVENT_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/event/event/${id}`)

         dispatch({
             type: EVENT_DETAILS_SUCCESS,
             payload: data.event
         })

     } catch (error) {
         dispatch({
             type: EVENT_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getEvents = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_EVENTS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/event/events`)

      

         dispatch({
             type: ALL_EVENTS_SUCCESS,
             payload: data.events
         })

     } catch (error) {

         dispatch({
             type: ALL_EVENTS_FAIL,
             payload: error.response.data.message
         })
     }
 }

//  const eventCount = data.events.length;
//  console.log("mokk",eventCount);