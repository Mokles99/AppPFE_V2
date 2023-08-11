import axios from 'axios';

import {
     ALL_ROLES_REQUEST,
     ALL_ROLES_SUCCESS,
     ALL_ROLES_FAIL,
    
   NEW_ROLE_REQUEST,
    NEW_ROLE_SUCCESS,
   NEW_ROLE_FAIL,

     DELETE_ROLE_REQUEST,
    DELETE_ROLE_SUCCESS,
     DELETE_ROLE_FAIL,

     UPDATE_ROLE_REQUEST,
   UPDATE_ROLE_SUCCESS,
   UPDATE_ROLE_FAIL,

   ROLE_DETAILS_REQUEST,
     ROLE_DETAILS_SUCCESS,
   ROLE_DETAILS_FAIL,

    
   
    CLEAR_ERRORS

 } from './constantes'


export const newRole = (roleData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_ROLE_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/role/role/new`, roleData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_ROLE_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_ROLE_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("role create")
 }


export const deleteRole = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_ROLE_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/api/roles/${id}`)

         dispatch({
             type: DELETE_ROLE_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_ROLE_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)


 export const updateRole = (id, roleData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_ROLE_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/api/roles/${id}`, roleData, config)

         dispatch({
             type: UPDATE_ROLE_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_ROLE_FAIL,
             payload: error.response.data.message
         })
     } }


 export const getRoleDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: ROLE_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/role/role/${id}`)

         dispatch({
             type: ROLE_DETAILS_SUCCESS,
             payload: data.role
         })

     } catch (error) {
         dispatch({
             type: ROLE_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }


 export const getRoles = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_ROLES_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/api/roles`)

         dispatch({
             type: ALL_ROLES_SUCCESS,
             payload: data.roles
         })
         return data 

     } catch (error) {

         dispatch({
             type: ALL_ROLES_FAIL,
             payload: error.response.data.message
         })
     }
 }

 /////



 