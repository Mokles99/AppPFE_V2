import axios from 'axios';

import {
     ALL_TESTS_REQUEST,
     ALL_TESTS_SUCCESS,
     ALL_TESTS_FAIL,
    
   NEW_TEST_REQUEST,
    NEW_TEST_SUCCESS,
   NEW_TEST_FAIL,

     DELETE_TEST_REQUEST,
    DELETE_TEST_SUCCESS,
     DELETE_TEST_FAIL,

     UPDATE_TEST_REQUEST,
   UPDATE_TEST_SUCCESS,
   UPDATE_TEST_FAIL,

   TEST_DETAILS_REQUEST,
     TEST_DETAILS_SUCCESS,
   TEST_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from './constantes'
export const newTest = (testData) => async (dispatch) => {
     try {
          
         dispatch({ type: NEW_TEST_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:8080/test/test/new`, testData, config) // bch nbdedlou lien berk
             
         dispatch({
             type: NEW_TEST_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_TEST_FAIL,
             payload: error.response.data.message
         })
     }
     console.log("test create")
 }
export const deleteTest = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_TEST_REQUEST })

         const { data } = await axios.delete(`http://localhost:8080/test/test/${id}`)

         dispatch({
             type: DELETE_TEST_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_TEST_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateTest = (id, testData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_TEST_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:8080/test/test/${id}`, testData, config)

         dispatch({
             type: UPDATE_TEST_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_TEST_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getTestDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: TEST_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/test/test/${id}`)

         dispatch({
             type: TEST_DETAILS_SUCCESS,
             payload: data.test
         })

     } catch (error) {
         dispatch({
             type: TEST_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getTests = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_TESTS_REQUEST })

         const { data } = await axios.get(`http://localhost:8080/test/tests`)

         dispatch({
             type: ALL_TESTS_SUCCESS,
             payload: data.tests
         })

     } catch (error) {

         dispatch({
             type: ALL_TESTS_FAIL,
             payload: error.response.data.message
         })
     }
 }