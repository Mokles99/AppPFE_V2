import axios from 'axios';

import {
    ALL_DESTINATIONS_REQUEST,
    ALL_DESTINATIONS_SUCCESS,
    ALL_DESTINATIONS_FAIL,
    
    NEW_DESTINATION_REQUEST,
    NEW_DESTINATION_SUCCESS,
    NEW_DESTINATION_FAIL,

    DELETE_DESTINATION_REQUEST,
    DELETE_DESTINATION_SUCCESS,
    DELETE_DESTINATION_FAIL,

    UPDATE_DESTINATION_REQUEST,
    UPDATE_DESTINATION_SUCCESS,
    UPDATE_DESTINATION_FAIL,

    DESTINATION_DETAILS_REQUEST,
    DESTINATION_DETAILS_SUCCESS,
    DESTINATION_DETAILS_FAIL,
    
    NEW_DESTINATION_RESET,
    DELETE_DESTINATION_RESET ,
    UPDATE_DESTINATION_RESET ,

    CLEAR_ERRORS

} from '../actions/constantes'




export const destinationsReducer = (state = { destinations: [] }, action) => {
    switch (action.type) {
        case ALL_DESTINATIONS_REQUEST:
       
            return {
                loading: true,
                destinations: []
            }

       

        case ALL_DESTINATIONS_SUCCESS : 
        return {
            loading: false,
            destinations: action.payload
        }

    case ALL_DESTINATIONS_FAIL:
   
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

export const newDestinationReducer = (state = { destination: {} }, action) => {
    switch (action.type) {

        case NEW_DESTINATION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_DESTINATION_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                destination: action.payload.product
            }

        case NEW_DESTINATION_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_DESTINATION_RESET:
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

export const destinationReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_DESTINATION_REQUEST:
        case UPDATE_DESTINATION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_DESTINATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_DESTINATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_DESTINATION_FAIL:
        case UPDATE_DESTINATION_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_DESTINATION_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_DESTINATION_RESET:
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

export const destinationDetailsReducer = (state = { destination: {} }, action) => {
    switch (action.type) {

        case DESTINATION_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DESTINATION_DETAILS_SUCCESS:
            return {
                loading: false,
                destination: action.payload
            }

        case DESTINATION_DETAILS_FAIL:
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
