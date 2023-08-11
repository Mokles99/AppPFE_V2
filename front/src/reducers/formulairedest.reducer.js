import { formulairedestConstants } from "../actions/constantes";

const initialState = {
  formulairedests: [],
  error: null,
  createdP: {},
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    //GET ALL formulairedestk
    case formulairedestConstants.GET_ALL_FORMULAIREDEST_REQUEST:
      state = {
        ...state,
      };
      break;
    case formulairedestConstants.GET_ALL_FORMULAIREDEST_SUCCESS:
      state = {
        ...state,
        formulairedests: action.payload.formulairedests,
      };
      break;
    case formulairedestConstants.GET_ALL_FORMULAIREDEST_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    //ADD formulairedestk
    case formulairedestConstants.ADD_FORMULAIREDEST_REQUEST:
      state = {
        ...state,
      };
      break;

    case formulairedestConstants.ADD_FORMULAIREDEST_SUCCESS:
      state = {
        ...state,
        createdU: action.payload.createdFormulairedests,
      };
      break;

    case formulairedestConstants.ADD_FORMULAIREDEST_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
       //EDIT FORMULAIREDESTK

       
    case formulairedestConstants.EDIT_FORMULAIREDEST_REQUEST:
        state = {
          ...state,
        };
        break;
  
      case formulairedestConstants.EDIT_FORMULAIREDEST_SUCCESS:
        state = {
          ...state,
          message: action.payload.message,
        };
        break;
  
      case formulairedestConstants.EDIT_FORMULAIREDEST_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        };
        break;

    //DELETE FORMULAIREDEST

    case formulairedestConstants.DELETE_FORMULAIREDEST_REQUEST:
      state = {
        ...state,
      };
      break;

    case formulairedestConstants.DELETE_FORMULAIREDEST_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;

    case formulairedestConstants.DELETE_FORMULAIREDEST_FAILURE:
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
