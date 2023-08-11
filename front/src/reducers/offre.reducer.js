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
    
    NEW_OFFRE_RESET,
    DELETE_OFFRE_RESET ,
    UPDATE_OFFRE_RESET ,

    CLEAR_ERRORS

} from '../actions/constantes'




export const offresReducer = (state = { offres: [] }, action) => {
    switch (action.type) {
        case ALL_OFFRES_REQUEST:
       
            return {
                loading: true,
                offres: []
            }

       

        case ALL_OFFRES_SUCCESS : 
        return {
            loading: false,
            offres: action.payload
        }

    case ALL_OFFRES_FAIL:
   
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

export const newOffreReducer = (state = { offre: {} }, action) => {
    switch (action.type) {

        case NEW_OFFRE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_OFFRE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                offre: action.payload.product
            }

        case NEW_OFFRE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_OFFRE_RESET:
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

export const offreReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_OFFRE_REQUEST:
        case UPDATE_OFFRE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_OFFRE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_OFFRE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_OFFRE_FAIL:
        case UPDATE_OFFRE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_OFFRE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_OFFRE_RESET:
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

export const offreDetailsReducer = (state = { offre: {} }, action) => {
    switch (action.type) {

        case OFFRE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OFFRE_DETAILS_SUCCESS:
            return {
                loading: false,
                offre: action.payload
            }

        case OFFRE_DETAILS_FAIL:
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
