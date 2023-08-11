

import {
    ALL_BOOKINGS_REQUEST,
    ALL_BOOKINGS_SUCCESS,
    ALL_BOOKINGS_FAIL,

    DELETE_BOOKING_FAIL,
    DELETE_BOOKING_SUCCESS,
    DELETE_BOOKING_REQUEST,
    DELETE_BOOKING_RESET,

   UPDATE_BOOKING_REQUEST, 
   UPDATE_BOOKING_SUCCESS,
   UPDATE_BOOKING_FAIL ,
   UPDATE_BOOKING_RESET,
   
   BOOKING_DETAILS_REQUEST, 
   BOOKING_DETAILS_SUCCESS ,
   BOOKING_DETAILS_FAIL ,
    
    CLEAR_ERRORS

} from '../actions/constantes'

export const bookingsReducer = (state = { bookings: [] }, action) => {
    switch (action.type) {
        case ALL_BOOKINGS_REQUEST:
       
            return {
                loading: true,
                bookings: []
            }

       

        case ALL_BOOKINGS_SUCCESS : 
        return {
            loading: false,
            bookings: action.payload
        }

    case ALL_BOOKINGS_FAIL:
   
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

export const bookingReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_BOOKING_REQUEST:
        case UPDATE_BOOKING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_BOOKING_FAIL:
        case UPDATE_BOOKING_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_BOOKING_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_BOOKING_RESET:
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

export const bookingDetailsReducer = (state = { booking: {} }, action) => {
    switch (action.type) {

        case BOOKING_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case BOOKING_DETAILS_SUCCESS:
            return {
                loading: false,
                booking: action.payload
            }

        case BOOKING_DETAILS_FAIL:
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