import axios from 'axios';

import {
     ALL_GALLERYEVENTS_REQUEST,
     ALL_GALLERYEVENTS_SUCCESS,
     ALL_GALLERYEVENTS_FAIL,
    
   NEW_GALLERYEVENT_REQUEST,
    NEW_GALLERYEVENT_SUCCESS,
   NEW_GALLERYEVENT_FAIL,

     DELETE_GALLERYEVENT_REQUEST,
    DELETE_GALLERYEVENT_SUCCESS,
     DELETE_GALLERYEVENT_FAIL,

     UPDATE_GALLERYEVENT_REQUEST,
   UPDATE_GALLERYEVENT_SUCCESS,
   UPDATE_GALLERYEVENT_FAIL,

   GALLERYEVENT_DETAILS_REQUEST,
     GALLERYEVENT_DETAILS_SUCCESS,
   GALLERYEVENT_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from './constantes'
export const newGalleryevent = (galleryeventData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_GALLERYEVENT_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/galleryevent/galleryevent/new`, galleryeventData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_GALLERYEVENT_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_GALLERYEVENT_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("galleryevent create")
 }
export const deleteGalleryevent = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_GALLERYEVENT_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/galleryevent/galleryevent/${id}`)

         dispatch({
             type: DELETE_GALLERYEVENT_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_GALLERYEVENT_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateGalleryevent = (id, galleryeventData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_GALLERYEVENT_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/galleryevent/galleryevent/${id}`, galleryeventData, config)

         dispatch({
             type: UPDATE_GALLERYEVENT_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_GALLERYEVENT_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getGalleryeventDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: GALLERYEVENT_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/galleryevent/galleryevent/${id}`)

         dispatch({
             type: GALLERYEVENT_DETAILS_SUCCESS,
             payload: data.galleryevent
         })

     } catch (error) {
         dispatch({
             type: GALLERYEVENT_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getGalleryevents = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_GALLERYEVENTS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/galleryevent/galleryevents`)

         dispatch({
             type: ALL_GALLERYEVENTS_SUCCESS,
             payload: data.galleryevents
         })

     } catch (error) {

         dispatch({
             type: ALL_GALLERYEVENTS_FAIL,
             payload: error.response.data.message
         })
     }
 }