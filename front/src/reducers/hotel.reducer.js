import axios from 'axios';

import {
    ALL_HOTELS_REQUEST,
    ALL_HOTELS_SUCCESS,
    ALL_HOTELS_FAIL,
    
    NEW_HOTEL_REQUEST,
    NEW_HOTEL_SUCCESS,
    NEW_HOTEL_FAIL,
    NEW_HOTEL_RESET,
    DELETE_HOTEL_REQUEST,
    DELETE_HOTEL_SUCCESS,
    DELETE_HOTEL_FAIL,

    UPDATE_HOTEL_REQUEST,
    UPDATE_HOTEL_SUCCESS,
    UPDATE_HOTEL_FAIL,

    HOTEL_DETAILS_REQUEST,
    HOTEL_DETAILS_SUCCESS,
    HOTEL_DETAILS_FAIL,
    
    
    DELETE_HOTEL_RESET ,
    UPDATE_HOTEL_RESET ,
    SEARCH_HOTELS_START,
    SEARCH_HOTELS_SUCCESS,
    SEARCH_HOTELS_FAILURE,
    CLEAR_ERRORS

} from '../actions/constantes'




export const hotelsReducer = (state = { hotels: [] }, action) => {
    switch (action.type) {
        case ALL_HOTELS_REQUEST:
       
            return {
                loading: true,
                hotels: []
            }

       

        case ALL_HOTELS_SUCCESS : 
        return {
            loading: false,
            hotels: action.payload
        }

    case ALL_HOTELS_FAIL:
   
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

export const newHotelReducer = (state = { hotel: {} }, action) => {
    switch (action.type) {

        case NEW_HOTEL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_HOTEL_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                hotel: action.payload.product
            }

        case NEW_HOTEL_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_HOTEL_RESET:
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

export const hotelReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_HOTEL_REQUEST:
        case UPDATE_HOTEL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_HOTEL_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_HOTEL_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_HOTEL_FAIL:
        case UPDATE_HOTEL_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_HOTEL_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_HOTEL_RESET:
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

export const hotelDetailsReducer = (state = { hotel: {} }, action) => {
    switch (action.type) {

        case HOTEL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case HOTEL_DETAILS_SUCCESS:
            return {
                loading: false,
                hotel: action.payload
            }

        case HOTEL_DETAILS_FAIL:
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


const initialState = {
    loading: false,
    hotels: [],
    error: null
};

export const searchHotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_HOTELS_START:
            return {
                ...state,
                loading: true
            };
        case SEARCH_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                hotels: action.payload
            };
        case SEARCH_HOTELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
