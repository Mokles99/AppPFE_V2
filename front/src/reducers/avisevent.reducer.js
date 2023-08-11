import { aviseventConstants } from "../actions/constantes";

const initialState = {
  avisevents: [],
  error: null,
  createdP: {},
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    //GET ALL aviseventk
    case aviseventConstants.GET_ALL_AVISEVENT_REQUEST:
      state = {
        ...state,
      };
      break;
    case aviseventConstants.GET_ALL_AVISEVENT_SUCCESS:
      state = {
        ...state,
        avisevents: action.payload.avisevents,
      };
      break;
    case aviseventConstants.GET_ALL_AVISEVENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    //ADD aviseventk
    case aviseventConstants.ADD_AVISEVENT_REQUEST:
      state = {
        ...state,
      };
      break;

    case aviseventConstants.ADD_AVISEVENT_SUCCESS:
      state = {
        ...state,
        createdU: action.payload.createdAvisevents,
      };
      break;

    case aviseventConstants.ADD_AVISEVENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
       //EDIT AVISEVENTK

       
    case aviseventConstants.EDIT_AVISEVENT_REQUEST:
        state = {
          ...state,
        };
        break;
  
      case aviseventConstants.EDIT_AVISEVENT_SUCCESS:
        state = {
          ...state,
          message: action.payload.message,
        };
        break;
  
      case aviseventConstants.EDIT_AVISEVENT_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        };
        break;

    //DELETE AVISEVENT

    case aviseventConstants.DELETE_AVISEVENT_REQUEST:
      state = {
        ...state,
      };
      break;

    case aviseventConstants.DELETE_AVISEVENT_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;

    case aviseventConstants.DELETE_AVISEVENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    default:
      console.log("default action");
  }

  return state;
};
