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
    
    NEW_BLOGHOME_RESET,
    DELETE_BLOGHOME_RESET ,
    UPDATE_BLOGHOME_RESET ,

    CLEAR_ERRORS

} from '../actions/constantes'




export const bloghomesReducer = (state = { bloghomes: [] }, action) => {
    switch (action.type) {
        case ALL_BLOGHOMES_REQUEST:
       
            return {
                loading: true,
                bloghomes: []
            }

       

        case ALL_BLOGHOMES_SUCCESS : 
        return {
            loading: false,
            bloghomes: action.payload
        }

    case ALL_BLOGHOMES_FAIL:
   
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

export const newBloghomeReducer = (state = { bloghome: {} }, action) => {
    switch (action.type) {

        case NEW_BLOGHOME_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_BLOGHOME_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                bloghome: action.payload.product
            }

        case NEW_BLOGHOME_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_BLOGHOME_RESET:
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

export const bloghomeReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_BLOGHOME_REQUEST:
        case UPDATE_BLOGHOME_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_BLOGHOME_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_BLOGHOME_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_BLOGHOME_FAIL:
        case UPDATE_BLOGHOME_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_BLOGHOME_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_BLOGHOME_RESET:
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

export const bloghomeDetailsReducer = (state = { bloghome: {} }, action) => {
    switch (action.type) {

        case BLOGHOME_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case BLOGHOME_DETAILS_SUCCESS:
            return {
                loading: false,
                bloghome: action.payload
            }

        case BLOGHOME_DETAILS_FAIL:
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
