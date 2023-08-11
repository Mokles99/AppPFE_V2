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
    
    NEW_USER_RESET,
    DELETE_USER_RESET ,
    UPDATE_USER_RESET ,
   
    CLEAR_ERRORS

} from '../actions/constantes'




export const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
       
            return {
                loading: true,
                users: []
            }

       

        case ALL_USERS_SUCCESS : 
        return {
            loading: false,
            users: action.payload
        }

    case ALL_USERS_FAIL:
   
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

export const newUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case NEW_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_USER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                user: action.payload.product
            }

        case NEW_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_USER_RESET:
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

export const userReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_USER_REQUEST:
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_USER_FAIL:
        case UPDATE_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_USER_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_USER_RESET:
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

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_DETAILS_FAIL:
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

////
