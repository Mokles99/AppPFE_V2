import axios from 'axios';

import {
    ALL_EVENTS_REQUEST,
    ALL_EVENTS_SUCCESS,
    ALL_EVENTS_FAIL,
    
    NEW_EVENT_REQUEST,
    NEW_EVENT_SUCCESS,
    NEW_EVENT_FAIL,

    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,

    UPDATE_EVENT_REQUEST,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAIL,

    EVENT_DETAILS_REQUEST,
    EVENT_DETAILS_SUCCESS,
    EVENT_DETAILS_FAIL,
    
    NEW_EVENT_RESET,
    DELETE_EVENT_RESET ,
    UPDATE_EVENT_RESET ,

    CLEAR_ERRORS

} from '../actions/constantes'




export const eventsReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case ALL_EVENTS_REQUEST:
       
            return {
                loading: true,
                events: []
            }

       

        case ALL_EVENTS_SUCCESS : 
        return {
            loading: false,
            events: action.payload
        }

    case ALL_EVENTS_FAIL:
   
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

export const newEventReducer = (state = { event: {} }, action) => {
    switch (action.type) {

        case NEW_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_EVENT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                event: action.payload.product
            }

        case NEW_EVENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_EVENT_RESET:
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

export const eventReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_EVENT_REQUEST:
        case UPDATE_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_EVENT_FAIL:
        case UPDATE_EVENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_EVENT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_EVENT_RESET:
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

export const eventDetailsReducer = (state = { event: {} }, action) => {
    switch (action.type) {

        case EVENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case EVENT_DETAILS_SUCCESS:
            return {
                loading: false,
                event: action.payload
            }

        case EVENT_DETAILS_FAIL:
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
