import axios from 'axios';

import {
     ALL_OFFRES_REQUEST,
     ALL_OFFRES_SUCCESS,
     ALL_OFFRES_FAIL,
    
   NEW_OFFRE_REQUEST,
    NEW_OFFRE_SUCCESS,
   NEW_OFFRE_FAIL,

     DELETE_OFFRE_REQUEST,
    DELETE_OFFRE_SUCCESS,
     DELETE_OFFRE_FAIL,

     UPDATE_OFFRE_REQUEST,
   UPDATE_OFFRE_SUCCESS,
   UPDATE_OFFRE_FAIL,

   OFFRE_DETAILS_REQUEST,
     OFFRE_DETAILS_SUCCESS,
   OFFRE_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from './constantes'
export const newOffre = (offreData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_OFFRE_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/offre/offre/new`, offreData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_OFFRE_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_OFFRE_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("offre create")
 }
export const deleteOffre = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_OFFRE_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/offre/offre/${id}`)

         dispatch({
             type: DELETE_OFFRE_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_OFFRE_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateOffre = (id, offreData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_OFFRE_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/offre/offre/${id}`, offreData, config)

         dispatch({
             type: UPDATE_OFFRE_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_OFFRE_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getOffreDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: OFFRE_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/offre/offre/${id}`)

         dispatch({
             type: OFFRE_DETAILS_SUCCESS,
             payload: data.offre
         })

     } catch (error) {
         dispatch({
             type: OFFRE_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getOffres = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_OFFRES_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/offre/offres`)

         dispatch({
             type: ALL_OFFRES_SUCCESS,
             payload: data.offres
         })

     } catch (error) {

         dispatch({
             type: ALL_OFFRES_FAIL,
             payload: error.response.data.message
         })
     }
 }