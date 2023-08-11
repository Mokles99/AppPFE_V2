import { contactConstants } from "../actions/constantes";

const initialState = {
  contacts: [],
  error: null,
  createdP: {},
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    //GET ALL contactk
    case contactConstants.GET_ALL_CONTACT_REQUEST:
      state = {
        ...state,
      };
      break;
    case contactConstants.GET_ALL_CONTACT_SUCCESS:
      state = {
        ...state,
        contacts: action.payload.contacts,
      };
      break;
    case contactConstants.GET_ALL_CONTACT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    //ADD contactk
    case contactConstants.ADD_CONTACT_REQUEST:
      state = {
        ...state,
      };
      break;

    case contactConstants.ADD_CONTACT_SUCCESS:
      state = {
        ...state,
        createdU: action.payload.createdContacts,
      };
      break;

    case contactConstants.ADD_CONTACT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
       //EDIT CONTACTK

       
    case contactConstants.EDIT_CONTACT_REQUEST:
        state = {
          ...state,
        };
        break;
  
      case contactConstants.EDIT_CONTACT_SUCCESS:
        state = {
          ...state,
          message: action.payload.message,
        };
        break;
  
      case contactConstants.EDIT_CONTACT_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        };
        break;

    //DELETE CONTACT

    case contactConstants.DELETE_CONTACT_REQUEST:
      state = {
        ...state,
      };
      break;

    case contactConstants.DELETE_CONTACT_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;

    case contactConstants.DELETE_CONTACT_FAILURE:
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
