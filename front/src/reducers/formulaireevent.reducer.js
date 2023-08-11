import { formulaireeventConstants } from "../actions/constantes";

const initialState = {
  formulaireevents: [],
  error: null,
  createdP: {},
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    //GET ALL formulaireeventk
    case formulaireeventConstants.GET_ALL_FORMULAIREEVENT_REQUEST:
      state = {
        ...state,
      };
      break;
    case formulaireeventConstants.GET_ALL_FORMULAIREEVENT_SUCCESS:
      state = {
        ...state,
        formulaireevents: action.payload.formulaireevents,
      };
      break;
    case formulaireeventConstants.GET_ALL_FORMULAIREEVENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    //ADD formulaireeventk
    case formulaireeventConstants.ADD_FORMULAIREEVENT_REQUEST:
      state = {
        ...state,
      };
      break;

    case formulaireeventConstants.ADD_FORMULAIREEVENT_SUCCESS:
      state = {
        ...state,
        createdU: action.payload.createdFormulaireevents,
      };
      break;

    case formulaireeventConstants.ADD_FORMULAIREEVENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
       //EDIT FORMULAIREEVENTK

       
    case formulaireeventConstants.EDIT_FORMULAIREEVENT_REQUEST:
        state = {
          ...state,
        };
        break;
  
      case formulaireeventConstants.EDIT_FORMULAIREEVENT_SUCCESS:
        state = {
          ...state,
          message: action.payload.message,
        };
        break;
  
      case formulaireeventConstants.EDIT_FORMULAIREEVENT_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        };
        break;

    //DELETE FORMULAIREEVENT

    case formulaireeventConstants.DELETE_FORMULAIREEVENT_REQUEST:
      state = {
        ...state,
      };
      break;

    case formulaireeventConstants.DELETE_FORMULAIREEVENT_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;

    case formulaireeventConstants.DELETE_FORMULAIREEVENT_FAILURE:
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
