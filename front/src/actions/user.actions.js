import axios from 'axios';

import {
     ALL_USERS_REQUEST,
     ALL_USERS_SUCCESS,
     ALL_USERS_FAIL,
    
   NEW_USER_REQUEST,
    NEW_USER_SUCCESS,
   NEW_USER_FAIL,

     DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
     DELETE_USER_FAIL,

     UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_FAIL,

   USER_DETAILS_REQUEST,
     USER_DETAILS_SUCCESS,
   USER_DETAILS_FAIL,

    
   
    CLEAR_ERRORS

 } from './constantes'


export const newUser = (userData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_USER_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/user/user/new`, userData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_USER_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_USER_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("user create")
 }


export const deleteUser = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_USER_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/api/users/${id}`)

         dispatch({
             type: DELETE_USER_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_USER_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)


 export const updateUser = (id, userData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_USER_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/api/users/${id}`, userData, config)

         dispatch({
             type: UPDATE_USER_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_USER_FAIL,
             payload: error.response.data.message
         })
     } }


 export const getUserDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: USER_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/api/user/${id}`)

         dispatch({
             type: USER_DETAILS_SUCCESS,
             payload: data.user
         })

     } catch (error) {
         dispatch({
             type: USER_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }


 export const getUsers = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_USERS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/api/users`)

         dispatch({
             type: ALL_USERS_SUCCESS,
             payload: data.users
         })
         return data 

     } catch (error) {

         dispatch({
             type: ALL_USERS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 /////



 