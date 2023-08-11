import axios from 'axios';

import {
     ALL_BLOGHOMES_REQUEST,
     ALL_BLOGHOMES_SUCCESS,
     ALL_BLOGHOMES_FAIL,
    
   NEW_BLOGHOME_REQUEST,
    NEW_BLOGHOME_SUCCESS,
   NEW_BLOGHOME_FAIL,

     DELETE_BLOGHOME_REQUEST,
    DELETE_BLOGHOME_SUCCESS,
     DELETE_BLOGHOME_FAIL,

     UPDATE_BLOGHOME_REQUEST,
   UPDATE_BLOGHOME_SUCCESS,
   UPDATE_BLOGHOME_FAIL,

   BLOGHOME_DETAILS_REQUEST,
     BLOGHOME_DETAILS_SUCCESS,
   BLOGHOME_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from './constantes'
export const newBloghome = (bloghomeData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_BLOGHOME_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/bloghome/bloghome/new`, bloghomeData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_BLOGHOME_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_BLOGHOME_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("bloghome create")
 }
export const deleteBloghome = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_BLOGHOME_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/bloghome/bloghome/${id}`)

         dispatch({
             type: DELETE_BLOGHOME_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_BLOGHOME_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateBloghome = (id, bloghomeData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_BLOGHOME_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/bloghome/bloghome/${id}`, bloghomeData, config)

         dispatch({
             type: UPDATE_BLOGHOME_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_BLOGHOME_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getBloghomeDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: BLOGHOME_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/bloghome/bloghome/${id}`)

         dispatch({
             type: BLOGHOME_DETAILS_SUCCESS,
             payload: data.bloghome
         })

     } catch (error) {
         dispatch({
             type: BLOGHOME_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getBloghomes = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_BLOGHOMES_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/bloghome/bloghomes`)

         dispatch({
             type: ALL_BLOGHOMES_SUCCESS,
             payload: data.bloghomes
         })

     } catch (error) {

         dispatch({
             type: ALL_BLOGHOMES_FAIL,
             payload: error.response.data.message
         })
     }
 }