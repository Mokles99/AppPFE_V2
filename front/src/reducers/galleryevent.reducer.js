import axios from 'axios';

import {
    ALL_GALLERYEVENTS_REQUEST,
    ALL_GALLERYEVENTS_SUCCESS,
    ALL_GALLERYEVENTS_FAIL,
    
    NEW_GALLERYEVENT_REQUEST,
    NEW_GALLERYEVENT_SUCCESS,
    NEW_GALLERYEVENT_FAIL,

    DELETE_GALLERYEVENT_REQUEST,
    DELETE_GALLERYEVENT_SUCCESS,
    DELETE_GALLERYEVENT_FAIL,

    UPDATE_GALLERYEVENT_REQUEST,
    UPDATE_GALLERYEVENT_SUCCESS,
    UPDATE_GALLERYEVENT_FAIL,

    GALLERYEVENT_DETAILS_REQUEST,
    GALLERYEVENT_DETAILS_SUCCESS,
    GALLERYEVENT_DETAILS_FAIL,
    
    NEW_GALLERYEVENT_RESET,
    DELETE_GALLERYEVENT_RESET ,
    UPDATE_GALLERYEVENT_RESET ,

    CLEAR_ERRORS

} from '../actions/constantes'




export const galleryeventsReducer = (state = { galleryevents: [] }, action) => {
    switch (action.type) {
        case ALL_GALLERYEVENTS_REQUEST:
       
            return {
                loading: true,
                galleryevents: []
            }

       

        case ALL_GALLERYEVENTS_SUCCESS : 
        return {
            loading: false,
            galleryevents: action.payload
        }

    case ALL_GALLERYEVENTS_FAIL:
   
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

export const newGalleryeventReducer = (state = { galleryevent: {} }, action) => {
    switch (action.type) {

        case NEW_GALLERYEVENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_GALLERYEVENT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                galleryevent: action.payload.product
            }

        case NEW_GALLERYEVENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_GALLERYEVENT_RESET:
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

export const galleryeventReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_GALLERYEVENT_REQUEST:
        case UPDATE_GALLERYEVENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_GALLERYEVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_GALLERYEVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_GALLERYEVENT_FAIL:
        case UPDATE_GALLERYEVENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_GALLERYEVENT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_GALLERYEVENT_RESET:
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

export const galleryeventDetailsReducer = (state = { galleryevent: {} }, action) => {
    switch (action.type) {

        case GALLERYEVENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GALLERYEVENT_DETAILS_SUCCESS:
            return {
                loading: false,
                galleryevent: action.payload
            }

        case GALLERYEVENT_DETAILS_FAIL:
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
