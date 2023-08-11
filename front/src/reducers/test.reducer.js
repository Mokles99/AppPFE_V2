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
    
    NEW_TEST_RESET,
    DELETE_TEST_RESET ,
    UPDATE_TEST_RESET ,

    CLEAR_ERRORS

} from '../actions/constantes'




export const testsReducer = (state = { tests: [] }, action) => {
    switch (action.type) {
        case ALL_TESTS_REQUEST:
       
            return {
                loading: true,
                tests: []
            }

       

        case ALL_TESTS_SUCCESS : 
        return {
            loading: false,
            tests: action.payload
        }

    case ALL_TESTS_FAIL:
   
        return {
            loading: false,
            error: action.payload
        }

    case CLEAR_ERRORS:
        return {
            ...state,
            error: null
        }

    default:
        return state;
}
}

export const newTestReducer = (state = { test: {} }, action) => {
    switch (action.type) {

        case NEW_TEST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_TEST_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                test: action.payload.product
            }

        case NEW_TEST_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_TEST_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const testReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_TEST_REQUEST:
        case UPDATE_TEST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_TEST_FAIL:
        case UPDATE_TEST_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_TEST_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_TEST_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const testDetailsReducer = (state = { test: {} }, action) => {
    switch (action.type) {

        case TEST_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case TEST_DETAILS_SUCCESS:
            return {
                loading: false,
                test: action.payload
            }

        case TEST_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
